import "./App.css";

import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const btnName = btnColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <main>
        <button
          type="button"
          style={{ backgroundColor: btnColor }}
          onClick={() => setBtnColor(btnName)}
        >
          Change to {btnName}
        </button>
      </main>
    </div>
  );
}

export default App;
