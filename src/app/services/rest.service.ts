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

  addCoach(coachDetails: AbstractControl) {
    return this.http.post<any>(
      `${this.baseUrl}/admins/coaches`,
      coachDetails, this.httpOptions);
  }

  getPlayers() {
    return this.http.get<any>(`${this.baseUrl}/admins/players`, this.httpOptions);
  }

  getCoaches() {
    return this.http.get<any>(`${this.baseUrl}/admins/coaches`, this.httpOptions);
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
    return this.http.get<any>(`${this.baseUrl}/players/attendances`, this.httpOptions);
  }

  getPlayerPracticeSchedule() {
    return this.http.get<any>(`${this.baseUrl}/players/practiceSchedules`, this.httpOptions);
  }

  getPlayerMatchSchedule() {
    return this.http.get<any>(`${this.baseUrl}/players/matchSchedules`, this.httpOptions);
  }

  setCoach(coachId: string, updatedCoachData: AbstractControl) {
    return this.http.put<any>(
      `${this.baseUrl}/admins/coaches/${coachId}`,
      updatedCoachData,
      this.httpOptions);
  }

  setPlayer(playerId: string, updatedPlayerData: AbstractControl) {
    return this.http.put<any>(
      `${this.baseUrl}/admins/players/${playerId}`,
      updatedPlayerData,
      this.httpOptions);
  }

  deleteCoach(coachId: string) {
    return this.http.delete<any>(`${this.baseUrl}/admins/coaches/${coachId}`, this.httpOptions);
  }

  deletePlayer(playerId: string) {
    return this.http.delete<any>(`${this.baseUrl}/admins/players/${playerId}`, this.httpOptions);
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

  markAttendance(attendance: AbstractControl) {
    return this.http.post<any>(
      `${this.baseUrl}/players/attendances/`,
      attendance.value,
      this.httpOptions
    );
  }
}