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

  getPlayer() {
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

  getPlayerPracticeSchedule() {
    return this.http.get<any>(`${this.baseUrl}/players/playerPracticeSchedule`, this.httpOptions);
  }
  
  getPlayerMatchSchedule() {
    return this.http.get<any>(`${this.baseUrl}/players/playerMatchSchedule`, this.httpOptions);
  }

  setPlayerData(playerId: string, firstName: string, lastName: string, emailAddress: string, phoneNo: string, role: string){
    return this.http.put<any>(
      `${this.baseUrl}/admin/updatePlayer/${playerId}`,
      { firstName, lastName, emailAddress, phoneNo, role },
      this.httpOptions);
  }

  deletePlayer(playerId: string){
    console.log("RestService -> deletePlayer -> playerId", playerId)
    return this.http.delete<any>(`${this.baseUrl}/admin/deletePlayer/${playerId}`, this.httpOptions);
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