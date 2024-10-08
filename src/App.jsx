import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Post from "./components/Post";
import Footer from "./components/Footer";
import SelectedItem from "./components/SelectedItem";
import Shuffle from "./components/Shuffle";

import Singer from "./assets/american_singer_canary.jpg";
import Crest from "./assets/crested_canary.jpg";
import Frills from "./assets/frilled_canary.jpg";
import Harlequin from "./assets/harlequin_portuguese_canary.jpg";
import Liz from "./assets/lizard_canary.jpg";
import Red from "./assets/red_domestic_canary.jpg";

const canariesArray = [
  { image: Singer, name: "Singer", id: 1 },
  { image: Crest, name: "Crest", id: 2 },
  { image: Frills, name: "Frills", id: 3 },
  { image: Harlequin, name: "Harlequin", id: 4 },
  { image: Liz, name: "Liz", id: 5 },
  { image: Red, name: "Red", id: 6 },
];

function App() {
  const [selectedPostName, setSelectedPostName] = useState("Singer");
  const [canaryArray, setCanaryArray] = useState(canariesArray);
  const selectedPost = canaryArray.find(
    (canary) => canary.name === selectedPostName
  );

  return (
    <div>
      <Header />

      <div className="app-content">
        <Shuffle setItemsArray={setCanaryArray} />
        <ul className="post-list">
          {canaryArray.map((canary) => (
            <Post
              key={canary.id}
              image={canary.image}
              name={canary.name}
              setSelectedPostName={setSelectedPostName}
            />
          ))}
        </ul>
        <SelectedItem image={selectedPost.image} name={selectedPost.name} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
