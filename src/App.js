import React, { useState } from "react";
import logo from "./logo.svg";
import Title from "./components/Title";
import Input from "./components/Input";
import "./App.css";
import Button from "./components/Button";

const copyright = "Created by baha";

function App() {
  const [city, setCity] = useState("");

  const handleonChange = (value) => {
    setCity(value);
  };
  return (
    <div className="App">
      <Title title={"Weather App"} color="green" isgreen={false} />
      <Input onChange={handleonChange} />
      <p style={{ fontWeight: "lighter" }}>Search for the city</p>
      <Button> Get the weather Near me</Button>

      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
}

export default App;
