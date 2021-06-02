import { downTo } from './helpers';
class Bottles {
    constructor() {}
    verse(num) {
        const newQuantity = (num - 1) != 0 ? num - 1 : "no more";
        const previousPass = num != 1 ? "bottles" : "bottle";
        const currentPass = newQuantity != 1 ? "bottles" : "bottle";
        const oneBottle = previousPass == 'bottle' ? "it" : "one";
        if(num != 0) {
            return `${num} ${previousPass} of beer on the wall, ${num} ${previousPass} of beer.\n` + 
            `Take ${oneBottle} down and pass it around, ${newQuantity} ${currentPass} of beer on the wall.\n`;
        } else {
            return `No more bottles of beer on the wall, no more bottles of beer.\n` +
                `Go to the store and buy some more, 99 bottles of beer on the wall.\n`;
        }
        
    }

    verses(start, end) {
        const verses = []
        for(let i = start; i >= end; i--) {
            verses.push(this.verse(i));
        }

        return verses.join('\n');
    }

    song() {
        return this.verses(99, 0);
    }
}

export {Bottles}