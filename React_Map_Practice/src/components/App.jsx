import React from "react";
import Card from "./Card";
import { emojipedia } from "../emojipedia";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map((em) => {
          return (
            <Card
              key={em.id}
              name={em.name}
              emoji={em.emoji}
              meaning={em.meaning}
            />
          );
        })}
      </dl>
    </div>
  );
}

export default App;
