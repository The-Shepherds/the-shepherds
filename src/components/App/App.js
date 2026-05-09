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
        "The poorest way to face life is to face it with a sneer. There are many men who feel a kind of twisted pride in cynicism; there are many who confine themselves to criticism of the way others do what they themselves dare not even attempt. There is no more unhealthy being, no man less worthy of respect, than he who either really holds, or feigns to hold, an attitude of sneering disbelief toward all that is great and lofty, whether in achievement or in that noble effort which, even if it fails, comes to second achievement. It is not the critic who counts; not the man who points out how the strong man stumbles, or where the doer of deeds could have done them better. The credit belongs to the man who was actually in the arena, whose face is marred by dust and sweat and blood; who strives valiantly; who errs, who comes short again and again, because there is no effort without error and shortcoming; but who does actually strive to do the deeds; who knows great enthusiasms, the great devotions; who spends himself in a worthy cause; who at the best knows in the end the triumph of high achievement, and who at the worst, if he fails, at least fails while daring greatly, so that his place shall never be with those cold and timid souls who neither know victory nor defeat.",
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
        "The best I can make of it is this: Nothing can exist without preconditions. Even a game cannot be played without rules—and the rules say what cannot be done, as much as what can. Perhaps the world is not possible, as a world, without its borders, without its rules. Maybe existence wouldn't be possible in the absence of our painful limitations.",
      author: "~Maps Of Meaning",
    },

    {
      text:
        "The culture of a people makes their government great, not the government.",
      author: "~Jacob Larcabal",
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
      author: "~Jacob Larcabal",
    },

    {
      text:
        "Frustration begins where knowledge ends.",
      author: "~Clinton Anderson",
    },

    {
      text:
        "History is the greatest story ever told, and we are its authors.",
      author: "~Jacob Larcabal",
    },

    {
      text:
        "Music directly represents the passions of the soul. If one listens to the wrong kind of music, he will become the wrong kind of person.",
      author: "~Aristotle",
    },

    {
      text:
        "The longer you are in an unhappy state, the easier it will be to get happy, and the harder it gets to be unhappy. Feeling bad means that you are capable of feeling equally good later.",
      author: "~Jacob Larcabal",
    },

    {
      text:
        "If all animals, insects, and living things had a higher consciousness, would the world improve?\n\nI’m a horse trainer, and I strive to push the capacity of horse minds, but it’s strange to think that our world might function better when a horse is a horse, even with its limits.",
      author: "~Stephen Burggraaf",
    },

    {
      text:
        "Don’t waste your time clinging to truth. Cling to the best option available.\n\n“Nobody knows what is finally true, by definition, but honest people make the best possible use of their experience.”",
      author: "~Stephen Burggraaf & Maps Of Meaning",
    },

    {
      text:
        "Given all power, what would you do to improve our culture? School.\n\n“Upon the subject of education, not presuming to dictate any plan or system respecting it, I can only say that I view it as the most important subject which we, as a people, can be engaged in.”",
      author: "~Stephen Burggraaf & Abraham Lincoln",
    },

    {
      text:
        "When variables change, we must change.\n\n“The individual who fails to modify his habits and presumptions as a consequence of change is deluding himself—is denying the world—is trying to replace reality itself with his own feeble wish.”",
      author: "~Stephen Burggraaf & Maps Of Meaning",
    },

    {
      text:
        "Men pursue making sense of everything, because otherwise, everything is meaningless.\n\n“Reason or the rope.”",
      author: "~Stephen Burggraaf & Diogenes",
    },

    {
      text:
        "Men must be willing to disagree with their outdated teachers and leaders.\n\n“Following in the footsteps of others seems safe, and requires no thought—but it is useless to follow a well-trodden trail when the terrain itself has changed.”",
      author: "~Stephen Burggraaf & Maps Of Meaning",
    },

    {
      text:
        "Men must always back their words with intent and action.\n\n“He has a right to criticize, who has a heart to help.”",
      author: "~Stephen Burggraaf & Abraham Lincoln",
    },

    {
      text:
        "People who live by the spirit of the law see that our religions are outdated for our time and culture.\n\n“Application of the letter of the law when the spirit of the law is necessary makes a mockery of culture.”",
      author: "~Stephen Burggraaf & Maps Of Meaning",
    },

    {
      text:
        "Nothing is always bad in life. There are always exceptions to the rules.",
      author: "~Stephen Burggraaf",
    },

    {
      text:
        "Would you rather:\n\nBe dropped off, alone on another inhabitable planet, and never contact another human again\n\nOr\n\nContinue your current existence, but lose your self-consciousness?\n\nWhy?",
      author: "~Stephen Burggraaf",
    },

    {
      text:
        "Live in a manner that masculine leaders of the past would respect and envy.",
      author: "~Stephen Burggraaf",
    },

  ];

const [currentQuote, setCurrentQuote] = useState(defaultQuote);

const [unusedQuotes, setUnusedQuotes] = useState(
  [...wisdomQuotes]
);

const generateQuote = () => {

  let remainingQuotes = [...unusedQuotes];

  if (remainingQuotes.length === 0) {
    remainingQuotes = [...wisdomQuotes];
  }

  const randomIndex = Math.floor(
    Math.random() * remainingQuotes.length
  );

  const selectedQuote = remainingQuotes[randomIndex];

  remainingQuotes.splice(randomIndex, 1);

  setUnusedQuotes(remainingQuotes);

  setCurrentQuote(selectedQuote);
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