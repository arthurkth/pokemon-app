import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
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
} from '@ionic/angular/standalone';
import { PokeapiService } from '../services/pokeapi.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
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
  ],
})
export class DetailsPage {
  pokemonInfo: any = {};

  @Input()
  set name(pokemonName: string) {
    this.pokeApiService.getPokemonDetails(pokemonName).subscribe((pokemon) => {
      this.pokemonInfo = pokemon;
      console.log(pokemon);
    });
  }
  constructor(private pokeApiService: PokeapiService) {}
}
