import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonBaseInfo, PokemonDetails } from '../types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private apiUrl = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) {}

  getPokemonList(
    limit: number = 20,
    offset: number = 0
  ): Observable<PokemonBaseInfo[]> {
    return this.http
      .get<PokemonBaseInfo[]>(
        `${this.apiUrl}/pokemon?limit=${limit}&offset=${offset}`
      )
      .pipe(map((response: any) => response.results));
  }

  getPokemonDetails(name: string): Observable<PokemonDetails> {
    return this.http.get<PokemonDetails>(`${this.apiUrl}/pokemon/${name}`).pipe(
      map((response: any) => ({
        abilities: response.abilities,
        height: response.height,
        weight: response.weight,
        id: response.id,
        types: response.types,
        stats: response.stats,
        name: response.name,
        sprites: response.sprites.other['official-artwork'].front_default,
      }))
    );
  }
}
