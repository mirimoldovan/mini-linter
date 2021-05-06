let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(' ');

//console.log(storyWords.length);

let betterWord = storyWords.filter(word => {
    if (!unnecessaryWords.includes(word)) {
        return word;
    }
});  

//let betterWord = storyWords.filter(word => !unnecessaryWords.includes(word));

const countWords = (arr1, arr2) => {
    let countWord1 = 0;
    let countWord2 = 0;
    let countword3 = 0;
    arr1.forEach(word => {
        if (word === arr2[0]) {
            countWord1++;
        } else if (word === arr2[1]) {
            countWord2++;
        } else if (word === arr2[2]) {
            countword3++;
        }
    });  return `first word "${arr2[0]}" appears ${countWord1} times, second word "${arr2[1]}" appears ${countWord2} times, third word "${arr2[2]}" appears ${countword3} times.`;
};

const countSentence = arr => {
    let sentences = 0;
    arr.forEach( word => {
        if(word.includes('.') || word.includes('!')) {
            sentences++;
        }
    }); 
    return sentences;
};

const logAll = () => {
    console.log(`This text count ${betterWord.length} words.`);
    console.log(`This text count ${countSentence(betterWord)} sentences.`);
    console.log(`In this text: ${countWords(betterWord, overusedWords)}`);
};

logAll();

console.log(betterWord.join(" "));