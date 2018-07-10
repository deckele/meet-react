export type CardType = '😃' | '😍' | '😂' | '🚀' | '🎉' | '🍻' | '🐌' | '🚧' | '🙄' | '😈' | '💩' | '🤖' | '🐰' | '🐨' | '🐸' | '🐵' | '🦄' | '🌈' | '🍌' | '🍕';

export const CARDS: Array<{
    type: CardType;
    id: number;
    isFlipped: boolean;
}> = (['😃', '😍', '😂', '🚀', '🎉', '🍻', '🐌', '🚧', '🙄', '😈', '💩', '🤖', '🐰', '🐨', '🐸', '🐵', '🦄', '🌈', '🍌', '🍕'] as CardType[])
.map((type, id) => ({
    type, id, isFlipped: false
}));