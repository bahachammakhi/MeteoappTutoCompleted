import React, { useState } from "react";
import classes from "./home.module.css";
import Title from "../components/Title";
import { useHistory } from "react-router-dom";
import Input from "../components/Input";
import Button from "../components/Button";

const copyright = "Created by baha";

const HomeContainer = () => {
  const history = useHistory();
  const [city, setCity] = useState("");

  const handleonChange = (value) => {
    setCity(value);
  };
  return (
    <div className="App">
      <Title title={"Weather App"} color="green" isgreen={false} />
      <Input onChange={handleonChange} />
      <p style={{ fontWeight: "lighter" }}>Search for the city</p>
      <Button onClick={() => history.push(`/weather/${city}`)}>
        {" "}
        Get the weather Near me
      </Button>

      <div style={{ position: "absolute", bottom: "0", right: "10px" }}>
        <Title title={copyright} color="green" isgreen={true} />
      </div>
    </div>
  );
};

export default HomeContainer;
