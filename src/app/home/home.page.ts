import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';

import { PokeapiService } from '../services/pokeapi.service';
import { RouterModule } from '@angular/router';
import { Pokemon } from '../types';
import { PokemonCardComponent } from '../components/pokemon-card/pokemon-card.component';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterModule,
    PokemonCardComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  ],
})
export class HomePage {
  pokemons: Pokemon[] = [];
  currentPage: number = 1;
  offset: number = 0;
  limit: number = 12;
  isLoading: boolean = false;
  totalPokemonCount: number = 0;

  constructor(private pokeapiService: PokeapiService) {
    addIcons({ heart });
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeapiService
      .getPokemonList(this.limit, this.offset)
      .subscribe((data) => {
        const newPokemons = data.map((pokemon: any): Pokemon => {
          const parts = pokemon.url.split('/');
          const id = parseInt(parts[parts.length - 2], 10);
          const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

          return { id, image, name: pokemon.name, url: pokemon.url };
        });
        this.pokemons = [...this.pokemons, ...newPokemons];
      });

    this.pokeapiService.getPokemonsCount().subscribe((count) => {
      if (this.pokemons.length >= count) {
        this.isLoading = true;
      }
    });
  }

  loadMore() {
    this.offset += this.limit;
    this.loadPokemons();
  }
}
