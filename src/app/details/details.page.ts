import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';
import { arrowUndoCircleOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
import { PokemonDetails } from '../types';
import { FavoritesService } from '../services/favorites.service';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from '@ionic/angular/standalone';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonList,
    IonRow,
    IonCol,
    IonButton,
    IonIcon,
  ],
})
export class DetailsPage {
  pokemonInfo: PokemonDetails | null = null;
  isFavorite: boolean = false;
  @Input()
  set name(pokemonName: string) {
    this.pokeApiService.getPokemonDetails(pokemonName).subscribe((pokemon) => {
      this.pokemonInfo = pokemon;
      this.isFavorite = this.checkIfPokemonIsAlreadyFavorite();
    });
  }
  constructor(
    private pokeApiService: PokeapiService,
    private favoritesService: FavoritesService
  ) {
    addIcons({ heart, arrowUndoCircleOutline, heartOutline });
  }

  addToFavorite() {
    if (!this.isFavorite) {
      this.favoritesService.setPokemonToFavorites(this.pokemonInfo);
    } else {
      this.favoritesService.removePokemonFromFavorites(this.pokemonInfo);
    }

    this.isFavorite = !this.isFavorite;
  }

  checkIfPokemonIsAlreadyFavorite() {
    return this.pokemonInfo
      ? this.favoritesService.isFavorite(this.pokemonInfo)
      : false;
  }
}
