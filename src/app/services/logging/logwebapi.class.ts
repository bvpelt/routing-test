import { LogEntryResult } from './logentryresult.class';

//import { Http, Response, Headers, RequestOptions } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { LogEntry } from "./logentry.class";
import { LogPublisher } from "./logpublisher.class";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { LogEntries } from './logentries.class';

export class LogWebApi extends LogPublisher {

    private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

    constructor(private http: HttpClient) {
        // Must call `super()`from derived classes
        super();

        // Set location
        this.location = "http://localhost:8080/api/v1/logs";
    }

    // Add log entry to back end data store
    log(entry: LogEntry): Observable<LogEntryResult> {
        let logResult: LogEntryResult = new LogEntryResult();
        logResult.result = false;

        let logentries: LogEntries = new LogEntries(entry);
        return this.postLogEntry(logentries);
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        // TODO: Call Web API to clear all values
        return of(true);
    }

    private postLogEntry(entry: LogEntries): Observable<LogEntryResult> {

        return this.http.post<LogEntryResult>(this.location, entry, { withCredentials: false, headers: this.headers })
            .pipe(
                tap({
                    next: () => {
                        // 200
                    },
                    error: () => {
                        console.log('postLogEntry: ' + JSON.stringify(LogEntryResult))
                    },
                }),
                catchError(

                    (error: HttpErrorResponse): Observable<any> => {
                        console.log('postLogEntry catchError: ' + JSON.stringify(error));
                        // we expect 404, it's not a failure for us.
                        if (error.status === 404) {
                            return of(null); // or any other stream like of('') etc.
                        }

                        // other errors we don't know how to handle and throw them further.
                        return throwError(() => error);
                    },
                )
            );
    }

    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    public handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
