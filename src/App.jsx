/* eslint-disable jsx-a11y/label-has-associated-control */
import "./App.css";

import { useState } from "react";

export function replaceCamelWithSpaces(color) {
  return color.replace(/\B([A-Z])\B/g, " $&");
}

function App() {
  const [btnColor, setBtnColor] = useState("MediumVioletRed");
  const [disabled, setDisabled] = useState(false);
  const btnName =
    btnColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
  return (
    <div className="App">
      <main>
        <button
          type="button"
          style={{ backgroundColor: disabled ? "gray" : btnColor }}
          onClick={() => setBtnColor(btnName)}
          disabled={disabled}
        >
          Change to {replaceCamelWithSpaces(btnName)}
        </button>
        <div className="checkbox-field">
          <input
            type="checkbox"
            id="disabled-button-checkbox"
            name="disabled-button-checkbox"
            defaultChecked={disabled}
            aria-checked={disabled}
            onChange={(e) => {
              setDisabled(e.target.checked);
            }}
          />
          <label htmlFor="disabled-button-checkbox">Disable button</label>
        </div>
      </main>
    </div>
  );
}

export default App;
