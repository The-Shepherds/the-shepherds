import "./App.css";
import shepherdLogo from "./shepherdLogo.jpg";

import {
  FaYoutube,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function App() {
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

          <li>
            We have a duty to humanity to survive.
          </li>

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
            We have a duty to humanity to have moderation in the majority of
            things.
          </li>

        </ol>
      </section>

      <p className="quote gladiatorQuote">
        “Let us talk now, very simply as men.”
        <br />
        <br />
        “There was once a dream that was Rome. You could only whisper it.
        Anything more than a whisper and it would vanish. It was so fragile,
        and I fear that it will not survive the winter. Let us whisper now,
        together you and I.”
        <br />
        <br />
        ~The Movie: Gladiator
      </p>
    </main>
  );
}

export default App;