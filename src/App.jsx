/* eslint-disable jsx-a11y/label-has-associated-control */
import "./App.css";

import { useState } from "react";

function App() {
  const [btnColor, setBtnColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const btnName = btnColor === "red" ? "blue" : "red";
  return (
    <div className="App">
      <main>
        <button
          type="button"
          style={{ backgroundColor: btnColor }}
          onClick={() => setBtnColor(btnName)}
          disabled={disabled}
        >
          Change to {btnName}
        </button>
        <div className="checkbox-field">
          <input
            type="checkbox"
            id="enable-button-checkbox"
            name="enable-button-checkbox"
            defaultChecked={disabled}
            aria-checked={disabled}
            onChange={(e) => setDisabled(e.target.checked)}
          />
          <label htmlFor="enable-button-checkbox">Disable button</label>
        </div>
      </main>
    </div>
  );
}

export default App;
