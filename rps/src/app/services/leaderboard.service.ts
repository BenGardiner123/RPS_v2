import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LeaderboardEnvelope } from '../Models/leaderboard';
import  Auth  from '../../../auth_config.json';


@Injectable({
  providedIn: 'root'
})
export class LeaderboardService {

  //acceess the environemtn variable to get the url
  private url = Auth.apiUri + "Leaderboard"

  constructor(private http: HttpClient) { }

  getLeaderboard(): Observable<LeaderboardEnvelope> {
    console.log("leaderboard service", this.url);
    return this.http.get<LeaderboardEnvelope>(this.url + "/Leaderboard");
  }

}
