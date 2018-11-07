import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CharactersResponse } from './models/characters-response-model';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  constructor(private http: HttpClient) {}

  getCharacters(
    nameQuery: string,
    page?: number
  ): Observable<CharactersResponse> {
    return this.http.get<CharactersResponse>(
      `${environment.apiUrl}/${nameQuery}/characters/${page ? page : ''}`
    );
  }
}
