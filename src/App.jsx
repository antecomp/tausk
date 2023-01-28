import { useState } from "react";
import { Tab, TabList, TabPanel, useTabState } from "ariakit/tab";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import TestComp from "./components/TestComp";

function App() {
  return (
    <div className="container">
      <TestComp passingState={3} />
      <h1>test</h1>
      <h1>hi omner</h1>
    </div>
  );
}

export default App;
