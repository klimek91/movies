import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {


  private baseUrl: String = environment.apiURL

  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/filmy/') ;
  }

  getFilm(id) : Observable<any>{
    return this.http.get(`${this.baseUrl}/api/filmy/${id}/` );

  }
}