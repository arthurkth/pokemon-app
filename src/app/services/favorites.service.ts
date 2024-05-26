import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private favoritesSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(
    []
  );
  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    this.updateFavoritesList();
  }
  setPokemonToFavorites(pokemon: any) {
    const favorites = this.getFavoritesPokemons();
    favorites.push(pokemon);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.updateFavoritesList();
  }
  getFavoritesPokemons() {
    let data: any = localStorage.getItem('favorites');
    return data ? JSON.parse(data) : [];
  }
  isFavorite(pokemon: any) {
    const pokemons = this.getFavoritesPokemons();
    const res = pokemons.some((item: any) => item.name === pokemon.name);
    return res ? true : false;
  }
  removePokemonFromFavorites(pokemon: any) {
    const pokemons = this.getFavoritesPokemons();
    const favorites = pokemons.filter(
      (item: any) => item.name !== pokemon.name
    );
    localStorage.setItem('favorites', JSON.stringify(favorites));
    this.updateFavoritesList();
  }
  updateFavoritesList(): void {
    const favorites = this.getFavoritesPokemons();
    this.favoritesSubject.next(favorites);
  }
}
