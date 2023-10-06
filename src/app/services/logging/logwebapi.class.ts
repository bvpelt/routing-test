
//import { Http, Response, Headers, RequestOptions } from '@angular/common/http';
import { Observable, of } from "rxjs";
import { map, pipe } from 'rxjs/operators';
import { LogEntry } from "./logentry.class";
import { LogPublisher } from "./logpublisher.class";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class LogWebApi extends LogPublisher {
    constructor(private http: HttpClient) {
        // Must call `super()`from derived classes
        super();

        // Set location
        this.location = "/api/log";
    }

    // Add log entry to back end data store
    log(entry: LogEntry): Observable<boolean> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        //let options = new RequestOptions({ headers: headers });
        let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'application/json' }

        /*
        return this.http.post(this.location, entry, options)
            .pipe(map(response => response.json())
                .catch(this.handleErrors));
*/
        this.http.post<any>(this.location, entry, { headers: new HttpHeaders({ 'Content-Type': 'application/json' }), responseType: 'json' })
            .pipe( /*
                tap(ChannelResult => this.logRes(ChannelResult),
                    catchError(this.handleError('postChannelResult', ChannelResult))
                    */
                map(response => console.log(JSON.stringify(response)))
            );

        return of(true);
    }

    // Clear all log entries from local storage
    clear(): Observable<boolean> {
        // TODO: Call Web API to clear all values
        return of(true);
    }

    private handleErrors(error: any): Observable<any> {
        let errors: string[] = [];
        let msg: string = "";

        msg = "Status: " + error.status;
        msg += " - Status Text: " + error.statusText;
        if (error.json()) {
            msg += " - Exception Message: " + error.json().exceptionMessage;
        }
        errors.push(msg);

        console.error('An error occurred', errors);

        throw new Error(error);
        return of(true);
    }
}
