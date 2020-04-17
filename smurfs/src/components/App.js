import React from "react";
import "./App.css";
import NewSmurfForm from "./NewSmurfForm";
import VillagerList from "./VillagerList"



export default function App() {

    return (
      <div className="App">
        <h1>Who Is In Smurf Village?</h1>
        <NewSmurfForm/>
        <VillagerList/>
      </div>
    );
  }



