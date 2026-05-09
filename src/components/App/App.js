import "./App.css";
import shepherdLogo from "./shepherdLogo.jpg";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import { useState } from "react";

function App() {

  const defaultQuote = {
    text:
      "“Let us talk now, very simply as men.”\n\n“There was once a dream that was Rome. You could only whisper it. Anything more than a whisper and it would vanish. It was so fragile, and I fear that it will not survive the winter. Let us whisper now, together you and I.”",
    author: "~The Movie: Gladiator",
  };

  const wisdomQuotes = [

    {
      text:
        "Poverty is uncomfortable; but nine times out of ten the best thing that can happen to a young man is to be tossed overboard and compelled to sink or swim.",
      author: "~James A. Garfield",
    },

    {
      text:
        "The poorest way to face life is to face it with a sneer. There are many men who feel a kind of twisted pride in cynicism...",
      author: "~Theodore Roosevelt",
    },

    {
      text:
        "The capability to endlessly further apprehension is central to the adaptive capacity of the individual; this capability, however, comes at an immense price, which is knowledge of finitude and death.",
      author: "~Maps Of Meaning",
    },

    {
      text:
        "Treat the art that you've learned as a friend and lean on it for rest.",
      author: "~Meditations",
    },

    {
      text:
        "Beauty is the proper dwelling place for an enlightened consciousness.",
      author: "~Unknown Author",
    },

    {
      text:
        "The definition of art carries with it the weight of human wisdom, experience, and expression. The lower a society esteems art, the lower their wisdom and expression will be.",
      author: "~Stephen Burggraaf",
    },

    {
      text:
        "Books serve to show a man that those original thoughts of his aren't very new at all.",
      author: "~Abraham Lincoln",
    },

    {
      text:
        "I learned, finally, that the terrible aspects of life might actually be a necessary precondition for the existence of life—and that it is possible to regard that precondition, in consequence, as comprehensible and acceptable.",
      author: "~Maps Of Meaning",
    },

    {
      text:
        "The best I can make of it is this: Nothing can exist without preconditions.",
      author: "~Maps Of Meaning",
    },

    {
      text:
        "The culture of a people makes their government great, not the government.",
      author: "~Jacob Larcaball",
    },

    {
      text:
        "Never spend your money before you have earned it.",
      author: "~Thomas Jefferson",
    },

    {
      text:
        "In every battle there comes a time when both sides consider themselves beaten, then he who continues the attack wins.",
      author: "~Ulysses S. Grant",
    },

    {
      text:
        "You must have a mustard seed of doubt to learn something new.",
      author: "~Jacob Larcaball",
    },

    {
      text:
        "Upon the subject of education, not presuming to dictate any plan or system respecting it, I can only say that I view it as the most important subject which we, as a people, can be engaged in.",
      author: "~Abraham Lincoln",
    },

    {
      text:
        "Next in importance to freedom and justice is popular education, without which neither freedom nor justice can be permanently maintained.",
      author: "~James A. Garfield",
    },

    {
      text:
        "America is a friend of freedom everywhere, but a custodian only of our own.",
      author: "~John Quincy Adams",
    },

    {
      text:
        "For if men are to be precluded from offering their sentiments on a matter, which may involve the most serious and alarming consequences, reason is of no use to us.",
      author: "~George Washington",
    },

    {
      text:
        "Frustration begins where knowledge ends.",
      author: "~Clinton Anderson",
    },

    {
      text:
        "History is the greatest story ever told, and we are its authors.",
      author: "~Jacob Larcaball",
    },

    {
      text:
        "Music directly represents the passions of the soul. If one listens to the wrong kind of music, he will become the wrong kind of person.",
      author: "~Aristotle",
    },

    {
      text:
        "The longer you are in an unhappy state, the easier it will be to get happy.",
      author: "~Jacob Larcaball",
    },

    {
      text:
        "I do not think much of a man who is not wiser today than he was yesterday.",
      author: "~Abraham Lincoln",
    },

    {
      text:
        "Heroes have made poets, and poets heroes.",
      author: "~George Washington",
    },

  ];

  const [currentQuote, setCurrentQuote] = useState(defaultQuote);

  const generateQuote = () => {
    const randomIndex = Math.floor(
      Math.random() * wisdomQuotes.length
    );

    setCurrentQuote(wisdomQuotes[randomIndex]);
  };

  return (
    <main id="app">

      <header className="topNav">

        <a
          href="https://x.com"
          target="_blank"
          rel="noreferrer"
          className="navButton"
        >
          <FaXTwitter className="navIcon xIcon" />
        </a>

        <a
          href="https://youtube.com"
          target="_blank"
          rel="noreferrer"
          className="navButton"
        >
          <FaYoutube className="navIcon" />
          <span>YouTube</span>
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="navButton"
        >
          <FaInstagram className="navIcon" />
          <span>Instagram</span>
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="navButton"
        >
          <FaFacebookF className="navIcon" />
          <span>Facebook</span>
        </a>

        <a
          href="https://rumble.com"
          target="_blank"
          rel="noreferrer"
          className="navButton"
        >
          <span className="navIcon">▶</span>
          <span>Rumble</span>
        </a>

      </header>

      <h1>The Shepherds</h1>

      <img
        src={shepherdLogo}
        alt="The Shepherds Logo"
        id="heroImage"
        loading="lazy"
      />

      <section className="proverbsSection">

        <p className="quote">
          “Iron sharpeneth iron; so a man sharpeneth the
          countenance of his friend.”
        </p>

        <p className="verse">
          ~Proverbs 27:17
        </p>

      </section>

      <section className="codeSection">

        <h2>Code of Unlocking Human Potential</h2>

        <p className="mission">
          To push humanity toward a better future
        </p>

        <ol className="duties">

          <li>We have a duty to humanity to survive.</li>

          <li>
            We have a duty to prioritize humanity’s prosperity.
          </li>

          <li>
            We have a duty to understand the entirety of humanity.
          </li>

          <li>
            We have a duty to critically think and speak.
          </li>

          <li>
            We have a duty to never stop disciplined learning and teaching.
          </li>

          <li>
            We have a duty to take full responsibility for all our actions.
          </li>

          <li>
            We have a duty to understand reality as it is, not as we wish it.
          </li>

          <li>
            We have a duty to have no deception.
          </li>

          <li>
            We have a duty to persuade and never manipulate.
          </li>

          <li>
            We have a duty to discover threats and imposters.
          </li>

          <li>
            We have a duty to persist in artistic expression.
          </li>

          <li>
            We have a duty to humanity to have moderation in the majority of things.
          </li>

        </ol>

      </section>

      <section className="wisdomSection">

        <button
          className="wisdomButton"
          onClick={generateQuote}
        >
          Click for a Quote of Wisdom
        </button>

        <div className="wisdomQuoteBox">

          <p className="wisdomQuote">
            {currentQuote.text}
          </p>

          <p className="wisdomAuthor">
            {currentQuote.author}
          </p>

        </div>

      </section>

    </main>
  );
}

export default App;