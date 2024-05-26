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
import { Pokemon, PokemonBaseInfo } from '../types';
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
  pokemons: Pokemon[] = [];
  currentPage: number = 1;
  offset: number = 0;
  limit: number = 12;
  isLoading: boolean = false;

  constructor(private pokeapiService: PokeapiService) {
    addIcons({ heart });
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeapiService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data) => {
        console.log(data);
        const newPokemons = data.map((pokemon: PokemonBaseInfo): Pokemon => {
          const parts = pokemon.url.split('/');
          const id = parseInt(parts[parts.length - 2], 10);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
          return { id, image, pokemon };
        });
        this.pokemons = [...this.pokemons, ...newPokemons];
      });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
