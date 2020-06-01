import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  registerUser(registerationFormValue: any) {
    return this.http.post<any>(`${this.baseUrl}/accounts/register`, registerationFormValue, { responseType: 'json', observe: 'body' });
  }

  getMatches() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/coaches/matches`, httpOptions);
  }

  getPracticeSessions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/coaches/practiceSessions`, httpOptions);
  }


  getPlayerPracticeSessions() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/players/practiceSessions`, httpOptions);
  }


  getPlayerMatches() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/players/matches`, httpOptions);
  }

  getAttendance() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.get<any>(`${this.baseUrl}/players/playerAttendance`, httpOptions);
  }

  getPlayerSchedule() {
    return null;
  }

  setMatchRanks(matchId: string, playerARank: string, playerBRank: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post<any>(`${this.baseUrl}/coaches/matches/${matchId}`, { playerARank, playerBRank }, httpOptions);
  }

  setPracticeSessionRanks(practiceSessionId: string, playerARank: string, playerBRank: string) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `bearer ${localStorage.getItem('token')}`
      })
    };
    return this.http.post<any>(`${this.baseUrl}/coaches/practiceSessions/${practiceSessionId}`, { playerARank, playerBRank }, httpOptions);
  }
}