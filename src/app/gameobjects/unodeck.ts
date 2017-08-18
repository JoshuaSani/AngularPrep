import { Card } from './card';

export class UnoDeck {

    private static COLORS = ['RED', 'YELLOW', 'GREEN', 'BLUE'];
    private static VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 20, 20];

    cards: Card[] = [];

    constructor() {
        this.fillUp();
        this.shuffle();
    }

    fillUp(): void {
        for (let t = 0; t < 2; t++) { // Do twice
            for (let ci in UnoDeck.COLORS) { // for every color
                for (let vi = 0; vi < UnoDeck.VALUES.length; vi++) {
                    let id: string = this.toDigit(vi + 1);
                    let c: Card = {
                        value: UnoDeck.VALUES[vi],
                        color: UnoDeck.COLORS[ci],
                        imageUrl: `/assets/c${ci}_${id}.png`
                    };
                    this.cards.push(c);
                }
            }
        }

        // Now for the zero cards
        for (let ci in UnoDeck.COLORS) {
            let c: Card = {
                value: 0,
                color: UnoDeck.COLORS[ci],
                imageUrl: `/assets/c${ci}_00.png`
            };
            this.cards.push(c);
        }

        // Now for the any-color cards
        for (let t = 0; t < 4; t++) {
            let c0: Card = {
                value: 50,
                color: 'ANY',
                imageUrl: `/assets/c4_00.png`
            };
            this.cards.push(c0);

            let c1: Card = {
                value: 50,
                color: 'ANY',
                imageUrl: `/assets/c4_01.png`
            };
            this.cards.push(c1);
        }
    }

    private toDigit(n: number): string {
        // String interpolation
        if (n < 10) {
            return (`0${n}`);
        }
        return (`${n}`);
    }

    private shuffle(): void {
        // Credit: https://github.com/dbiele/TypeScript_Shuffling_Array
        for (let i: number = this.cards.length - 1; i >= 0; i--) {
            var randomIndex: number = Math.floor(Math.random() * (i + 1));
            var cardAtIndex: Card = this.cards[randomIndex];

            this.cards[randomIndex] = this.cards[i];
            this.cards[i] = cardAtIndex;
        }
    }

    public take(): Card {
        return <Card> this.cards.pop();
    }

}