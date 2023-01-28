import { useState } from "react";
import { Tab, TabList, TabPanel, useTab, useTabState } from "ariakit/tab";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import TestComp from "./components/TestComp";
import Desk from "./components/Desk";
import "./stylesheets/tabBar.css"

function App() {
  const defaultTabID = "default-selected-tab";
  const tab = useTabState({defaultTabID})
  return (
    <div className="container">
      <h3>Sweet freaking webapp :D</h3>
      <TabList state={tab} className="outer-tabs-container" aria-label="tabs">
        <Tab className="outer-tab" id={defaultTabID}>Desk</Tab>
        <Tab className="outer-tab">TestComp</Tab>
      </TabList>
      <div className="panels">
        <TabPanel state={tab} tabId={defaultTabID}>
          <Desk/>
        </TabPanel>
        <TabPanel state={tab}>
          <TestComp/>
        </TabPanel>
      </div>
    </div>
  );
}

export default App;
