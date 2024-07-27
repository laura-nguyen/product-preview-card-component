import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      Perfume Gabrielle Essence Eau De Parfum A floral, solar and voluptuous
      interpretation composed by Olivier Polge, Perfumer-Creator for the House
      of CHANEL. $149.99 $169.99 Add to Cart
      <footer>
        <div className="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by
          <a href="https://github.com/laura-nguyen/qr-code-component">
            Laura Nguyen
          </a>
          .
        </div>
      </footer>
    </>
  );
}

export default App;
