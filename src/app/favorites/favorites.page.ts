import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonCol,
  IonRow,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonThumbnail,
  IonButton,
  IonItem,
} from '@ionic/angular/standalone';
import { FavoritesService } from '../services/favorites.service';
import { Pokemon } from '../types';
@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonGrid,
    IonCol,
    IonRow,
    IonCard,
    IonCardContent,
    IonThumbnail,
    IonItem,
    IonCardTitle,
    IonButton,
    RouterModule,
    PokemonCardComponent,
  ],
})
export class FavoritesPage implements OnInit {
  favorites: Pokemon[] = [];
  currentPage: number = 1;
  limit: number = 12;
  isLoading: boolean = false;

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe((favorites) => {
      this.loadFavorites();
    });
  }

  loadFavorites(): void {
    const favorites = this.favoritesService.getFavoritesPokemons();
    this.favorites = favorites.slice(0, this.currentPage * this.limit);
  }

  loadMore() {
    this.currentPage++;
    this.loadFavorites();

    const favorites = this.favoritesService.getFavoritesPokemons();
    if (this.currentPage * this.limit >= favorites.length) {
      this.isLoading = true;
    }
  }
}
