let author = document.getElementById("author");
let quote = document.getElementById("quote");
let quoteButton = document.getElementById("quote-button")
let now_playing = document.getElementById("now-playing")

let quoteIndex = 0;
let quoteList = [
    {
        quote: "The greatest glory in living lies not in never failing, but in rising every time we fall",
        author: "Nelson Mandela"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "Always remember that you are absolutely unique. Just like everyone else.",
        author: "Margaret Mead"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    },
    {
        quote: "Whoever is happy will make others happy too",
        author: "Anne Frank"
    },
    {
        quote: "If life were predictable it would cease to be life, and be without flavor.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        author: "James Cameron"
    },
    {
        quote: "Do not go where the path may lead, go instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "When you reach the end of your rope, tie a knot in it and hang on.", 
        author: "Margaret Mead"
    },
    {
        quote: "Don't judge each day by the harvest you reap but by the seeds that you plant.",
        author: "Robert Louis Stevenson"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
        author: "Benjamin Franklin"
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller"
    },
    {
        quote: "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        author: "Thomas A. Edison"
    }
]

function LoadQuote() {
    document.getElementById("now-playing").innerHTML = "QUOTE " + `${quoteIndex + 1}` + " / " + `${quoteList.length + 1}`;
    document.getElementById("quote").innerHTML = quoteList[quoteIndex].quote;
    document.getElementById("author").innerHTML = quoteList[quoteIndex].author;
}

function nextQuote() {
    //Go back to the first quote if the current
    // one is the last in the quote list
    
    if (quoteIndex < quoteList.length - 1) {
        quoteIndex += 1;
    } else {
        quoteIndex = 0;
    }

    LoadQuote(quoteIndex);
}

function prevQuote() {
    // Go back to the last quote if the current
    // one is the first in the quote list
    if (quoteIndex > 0) {
        quoteIndex -= 1;
    } else {
        quoteIndex = quoteList.length;
    }

    // Load and play the new track
    LoadQuote(quoteIndex);
}

function restartQuote() {
    document.getElementById("now-playing").innerHTML = "QUOTE " + `${1}` + " / " + `${quoteList.length + 1}`;
    document.getElementById("quote").innerHTML = quoteList[0].quote;
    document.getElementById("author").innerHTML = quoteList[0].author;
    quoteIndex = 0;
    
}