import { Component } from '@angular/core';
import { Card } from './gameobjects/card';
import { UnoDeck } from './gameobjects/unodeck';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Uno Game';

  public fieldPlayersCards: Card[][] = [];

  whenStart(playersCards: Card[][]): void {
    this.fieldPlayersCards = playersCards;
  }
}
