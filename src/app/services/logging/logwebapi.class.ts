import { LogEntryResult } from './logentryresult.class';

//import { Http, Response, Headers, RequestOptions } from '@angular/common/http';
import { Observable, of, throwError } from "rxjs";
import { catchError, tap } from 'rxjs/operators';
import { LogEntry } from "./logentry.class";
import { LogPublisher } from "./logpublisher.class";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";

export class LogWebApi extends LogPublisher {

    constructor(private http: HttpClient) {
        // Must call `super()`from derived classes
        super();

        // Set location
        this.location = "http://localhost:8080/api/log";
    }

    // Add log entry to back end data store
    log(entry: LogEntry): Observable<LogEntryResult> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'application/json' }

        let logResult: LogEntryResult = new LogEntryResult();
        logResult.result = false;

        /*
        this.http.post<LogEntryResult>(this.location, entry, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' })
            .pipe(
                tap(LogEntryResult => console.log(JSON.stringify(LogEntryResult)),
                    catchError(this.handleError('postChannelResult', LogEntryResult))),

            );
*/
        return this.postLogEntry(entry);

        //return of(logResult);
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        // TODO: Call Web API to clear all values
        return of(true);
    }

    private postLogEntry(entry: LogEntry): Observable<LogEntryResult> {

        return this.http.post<LogEntryResult>(this.location, entry)
            .pipe(
                tap({
                    next: () => {
                        // 200
                    },
                    error: () => {
                        console.log(JSON.stringify(LogEntryResult))
                    },
                }),
                catchError(
                    (error: HttpErrorResponse): Observable<any> => {
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
