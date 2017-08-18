import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Card } from '../gameobjects/card';
import { UnoDeck } from '../gameobjects/unodeck';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  numPlayers: number = 2

  @Output()
  onStart: EventEmitter<Card[][]> = new EventEmitter<Card[][]>();

  constructor() { }

  ngOnInit() {
  }

  plus(): void {
    
    if (this.numPlayers < 7)
      this.numPlayers++;
  }

  minus(): void {
    if (this.numPlayers > 2)
      this.numPlayers--;
  }

  start(): void {
    let unoDeck = new UnoDeck();

    let playersCards: Card[][] = [];

    for (let i = 0; i < this.numPlayers; i++) {
      playersCards[i] = [];
      for (let j = 0; j < 7; j++) { // Give 7 cards to each player.
        playersCards[i][j] = unoDeck.take();
      }
    }

    // console.log(playersCards[2][3]);
    this.onStart.emit(playersCards);
  }

}
