import React, { useState, useEffect } from 'react';
import './TeamworkQuote.css';

// Array of inspirational sports quotes
const sportQuotes = [
  { athlete: "Muhammad Ali", quote: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'" },
  { athlete: "Michael Jordan", quote: "I've failed over and over and over again in my life. And that is why I succeed." },
  { athlete: "Serena Williams", quote: "I really think a champion is defined not by their wins but by how they can recover when they fall." },
  { athlete: "Usain Bolt", quote: "I don't think limits." },
  { athlete: "Kobe Bryant", quote: "The most important thing is to try and inspire people so that they can be great in whatever they want to do." },
  { athlete: "Cristiano Ronaldo", quote: "Dreams are not what you see in your sleep — dreams are things which do not let you sleep." },
  { athlete: "Mia Hamm", quote: "Somewhere behind the athlete you've become and the hours of practice and the coaches who have pushed you is a little girl who fell in love with the game and never looked back." },
  { athlete: "Pelé", quote: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing." },
  { athlete: "Simone Biles", quote: "I'd rather regret the risks that didn't work out than the chances I didn't take at all." },
  { athlete: "Roger Federer", quote: "You have to believe in the long term plan you have but you need the short term goals to motivate and inspire you." },
  { athlete: "Tom Brady", quote: "I didn't come this far to only come this far — keep going." },
  { athlete: "Billie Jean King", quote: "Champions keep playing until they get it right." }
];

// Function to get a random quote
function getRandomQuote() {
  const idx = Math.floor(Math.random() * sportQuotes.length);
  return sportQuotes[idx];
}

const TeamworkQuote = () => {
  const [quote, setQuote] = useState(getRandomQuote());

  // Optional: change the quote every X seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setQuote(getRandomQuote());
    }, 20000); // change every 20 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="quote-container mx-3">
      <blockquote className="quote-blockquote">
        <p className="quote-text">"{quote.quote}"</p>
        <footer className="quote-footer">— {quote.athlete}</footer>
      </blockquote>
    </div>
  );
};

export default TeamworkQuote;
