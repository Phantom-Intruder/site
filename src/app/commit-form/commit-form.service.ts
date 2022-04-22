import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HandleError, HttpErrorHandler } from '../http-error-handler.service';
import { Commit } from '../models/commit';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class CommitFormService {
  apiUrl = 'http://localhost:3000/commit';  // URL to web api
  private handleError: HandleError;

  constructor(private http: HttpClient, httpErrorHandler: HttpErrorHandler) { 
    this.handleError = httpErrorHandler.createHandleError('CommitFormService');
  }

  addCommit(commit: Commit): Observable<unknown> {
    return this.http.post<Commit>(this.apiUrl, commit, httpOptions)
      .pipe(
        catchError(this.handleError('addCommit'))
      );
  }
}