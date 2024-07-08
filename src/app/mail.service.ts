// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MailService {

//   private baseUrl = 'http://127.0.0.1:5000/send-email'; // Change this to your Flask server URL

//   constructor(private http: HttpClient) { }

//   sendEmail(name: string, email: string, message: string): Observable<any> {
//     const url = `${this.baseUrl}/send-email`;
//     const body = { name, email, message };

//     return this.http.post<any>(url, body);
//   }
// }

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private apiUrl = 'http://127.0.0.1:5000/send-email'; // Update this URL as needed

  constructor(private http: HttpClient) { }

  sendEmail(name: string, email: string, message: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { name, email, message };
    return this.http.post<any>(this.apiUrl, body, { headers });
  }
}