import { Component } from '@angular/core';
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
  ],
})
export class HomePage {
  pokemons: any[] = [];
  offset: number = 0;
  limit: number = 100;

  constructor(private pokeapiService: PokeapiService) {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeapiService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data) => {
        const pokemons = data.results;
        this.pokemons = pokemons.map((item: any) => {
          const parts = item.url.split('/');
          const id = parseInt(parts[parts.length - 2], 10);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
          return { item, id, image };
        });
      });
  }

  // loadMore(event: InfiniteScrollCustomEvent) {
  //   this.offset += this.limit;
  //   this.loadPokemons();
  // }
}
