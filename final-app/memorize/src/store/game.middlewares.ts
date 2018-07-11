import { CardType } from '../models/card-types';

export function double<T>(array: T[]): T[] {
    return array.reduce((acc, cur) => acc.concat([cur, cur]), [] as T[]);
}

export function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length;
    const shuffled = array.slice(); // copy

    while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temporaryValue = shuffled[currentIndex];
        shuffled[currentIndex] = shuffled[randomIndex];
        shuffled[randomIndex] = temporaryValue;
    }

    return shuffled as T[];
}

export function mapToAppCards(cards: CardType[]): Array<{
    type: CardType;
    id: number;
    isFlipped: boolean;
}> {
    return cards.map((type, id) => ({
        type, id, isFlipped: false
    }));
}