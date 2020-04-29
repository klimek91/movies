import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FilmyService {


  private baseUrl: String = environment.apiURL

  private token: String = '8c7ebea09b0a345dc3fae92c042a8e0b219d25ef'
  private httpHeaders = new HttpHeaders(
    {'Authorization':`Token ${this.token}`}
    )

  constructor(private http: HttpClient) { }

  wszystkieFilmy(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/filmy/', 
    {headers: this.httpHeaders}) ;
  }

  getFilm(id) : Observable<any>{
    return this.http.get(`${this.baseUrl}/api/filmy/${id}/`,
    {headers: this.httpHeaders} );

  }
}