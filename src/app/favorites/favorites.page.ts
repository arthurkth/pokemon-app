import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
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
  ],
})
export class FavoritesPage implements OnInit {
  favorites: any = [];
  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoritesService.favorites$.subscribe((favorites) => {
      this.favorites = favorites;
    });
  }
}
