import { mapToAppCards, shuffle, double } from '../store/game/middlewares/shuffle-cards';

export type CardType = '😃' | '😍' | '😂' | '🚀' | '🎉' | '🍻' | '🐌' | '🚧' | '🙄' | '😈' | '💩' | '🤖' | '🐰' | '🐨' | '🐸' | '🐵' | '🦄' | '🌈' | '🍌' | '🍕';

const availableCards = (['😃', '🚀', '🎉', '🍻', '💩', '🐸', '🦄', '🌈', '🍌', '🍕'] as CardType[]);

export const CARDS = mapToAppCards(shuffle(double(availableCards)));
