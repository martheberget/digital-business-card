import { useState } from "react";
import { Card } from "./components/Card";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Card></Card>
    </>
  );
}

export default App;
