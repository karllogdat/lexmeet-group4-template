import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-5xl font-bold">Hello world!</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat nobis
        explicabo in tempore, commodi sunt dolore doloremque ullam vel illum
        autem accusantium, eligendi harum asperiores modi natus voluptates
        numquam eaque?
      </p>
    </div>
  );
}

export default App;
