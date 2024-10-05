import "./App.css";
import Singer from "./assets/american_singer_canary.jpg";
import Crest from "./assets/crested_canary.jpg";
import Frills from "./assets/frilled_canary.jpg";
import Harlequin from "./assets/harlequin_portuguese_canary.jpg";
import Liz from "./assets/lizard_canary.jpg";
import Red from "./assets/red_domestic_canary.jpg";

function App() {
  return (
    <div>
      <header className="header-component">
        <h1>Canarygram</h1>
      </header>

      <ul className="post-list">
        <li className="post-component">
          <button>
            <img src={Singer} alt="Singer" />
            <p>Singer</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Crest} alt="Crest" />
            <p>Crest</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Frills} alt="Frills" />
            <p>Frills</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Harlequin} alt="Harlequin" />
            <p>Harlequin</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Liz} alt="Liz" />
            <p>Liz</p>
          </button>
        </li>
        <li className="post-component">
          <button>
            <img src={Red} alt="Red" />
            <p>Red</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default App;
