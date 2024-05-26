import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Input } from '@angular/core';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { arrowUndoCircleOutline } from 'ionicons/icons';
import { RouterModule } from '@angular/router';
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
  pokemonInfo: any = {};

  @Input()
  set name(pokemonName: string) {
    this.pokeApiService.getPokemonDetails(pokemonName).subscribe((pokemon) => {
      this.pokemonInfo = pokemon;
      console.log(pokemon);
    });
  }
  constructor(private pokeApiService: PokeapiService) {
    addIcons({ heart, arrowUndoCircleOutline });
  }
}
