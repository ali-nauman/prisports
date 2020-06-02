import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl: string = 'http://localhost:3000';
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(private http: HttpClient) { }

  registerUser(registerationFormValue: AbstractControl) {
    return this.http.post<any>(
      `${this.baseUrl}/accounts/register`,
      registerationFormValue);
  }

  getPlayers() {
    return this.http.get<any>(`${this.baseUrl}/admin/players`, this.httpOptions);
  }

  getCoaches() {
    return this.http.get<any>(`${this.baseUrl}/admin/coaches`, this.httpOptions);
  }

  getMatches() {
    return this.http.get<any>(`${this.baseUrl}/coaches/matches`, this.httpOptions);
  }

  getPracticeSessions() {
    return this.http.get<any>(`${this.baseUrl}/coaches/practiceSessions`, this.httpOptions);
  }

  getPlayerPracticeSessions() {
    return this.http.get<any>(`${this.baseUrl}/players/practiceSessions`, this.httpOptions);
  }

  getPlayerMatches() {
    return this.http.get<any>(`${this.baseUrl}/players/matches`, this.httpOptions);
  }

  getAttendance() {
    return this.http.get<any>(`${this.baseUrl}/players/playerAttendance`, this.httpOptions);
  }

  getPlayerSchedule() {
    return null;
  }

  setMatchRanks(matchId: string, playerARank: string, playerBRank: string) {
    return this.http.put<any>(
      `${this.baseUrl}/coaches/matches/${matchId}`,
      { playerARank, playerBRank },
      this.httpOptions);
  }

  setPracticeSessionRanks(practiceSessionId: string, playerARank: string, playerBRank: string) {
    return this.http.put<any>(
      `${this.baseUrl}/coaches/practiceSessions/${practiceSessionId}`,
      { playerARank, playerBRank },
      this.httpOptions);
  }
}