import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { ContactMessage } from '../model/contact-message';
import { MailjetMessage } from './MailjetMessage';
import { MailjetEmailUser } from './MailjetEmailUser';
import { MailjetRequest } from './MailjetRequest';

@Injectable()
export class ContactService {
  private apiUrl: string;

  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.emailSubmissionApi.url;
  }

  postContactForm(email: ContactMessage): Observable<any> {
    const body = JSON.stringify(
      new MailjetRequest([this.setUpMailjetMessage(email)]));

    const apiUsername = environment.emailSubmissionApi.username;
    const apiPassword = environment.emailSubmissionApi.password;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa(apiUsername + ':' + apiPassword),
      })
    };

    return this.httpClient
      .post<ContactMessage>(this.apiUrl, body, httpOptions)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    return throwError('Something bad happened; please try again later.');
  }

  private setUpMailjetMessage(message: ContactMessage): MailjetMessage {
    return new MailjetMessage(
      new MailjetEmailUser('d@dfar.io', 'DF'),
      [new MailjetEmailUser('d@dfar.io', 'DF-send')],
      'From the X by 2 Website',
      'Test content'
    );
  }
}
