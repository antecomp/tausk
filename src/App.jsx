import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import TabBar from "./components/tabBar";

function App() {
  return (
    <div className="container">
      <TabBar passingState={"given its value by App"} />
      <h1>test</h1>
      <h1>hi omner</h1>
    </div>
  );
}

export default App;
