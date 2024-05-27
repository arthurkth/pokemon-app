import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/types';
import {
  IonText,
  IonGrid,
  IonRow,
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
  IonCol,
  IonIcon,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  standalone: true,
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [
    IonText,
    IonGrid,
    IonRow,
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
    RouterModule,
  ],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemons: Pokemon[] = [];
  @Input() loadMore: () => void = () => {};
  @Input() isLoading: boolean = false;
  constructor() {}

  ngOnInit() {}
}
