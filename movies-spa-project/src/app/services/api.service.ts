import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// API call = 'http://www.omdbapi.com/?i=tt3896198&apikey=' // i=Id from movie.

const baseUrl = 'http://www.omdbapi.com/';
const apiKey = 'f8c39af6';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  // Get Movies List
  getSearchedMovies(title: string): Observable<any> {
    return this.http.get(`${baseUrl}?s=${title}&type=movie&apikey=${apiKey}`);
  }

  // Get Movie details
  getMovieDetails(id: string): Observable<any> {
    return this.http.get(`${baseUrl}?i=${id}&apikey=${apiKey}`);
  }

}
