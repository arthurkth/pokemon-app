import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonAvatar,
  IonButton,
  IonThumbnail,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonRow,
  IonGrid,
  IonCol,
  IonIcon,
} from '@ionic/angular/standalone';
import { PokeapiService } from '../services/pokeapi.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonButton,
    IonThumbnail,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonRow,
    IonGrid,
    IonCol,
    IonIcon,
  ],
})
export class HomePage {
  pokemons: any[] = [];
  currentPage = 1;
  offset: number = 0;
  limit: number = 8;
  isLoading = false;
  error = null;

  constructor(private pokeapiService: PokeapiService) {
    addIcons({ heart });
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeapiService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data) => {
        const newPokemons = data.results.map((item: any) => {
          const parts = item.url.split('/');
          const id = parseInt(parts[parts.length - 2], 10);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return { item, id, image };
        });

        this.pokemons = [...this.pokemons, ...newPokemons];
      });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
