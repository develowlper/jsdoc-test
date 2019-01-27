import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Test from "./components/Test";
import { TestProvider } from "./lib";

/**
 * Super fancy
 */

const App = () => {
  return (
    <div className="App">
      <TestProvider test={"test"}>
        <Test />
      </TestProvider>
    </div>
  );
};

export default App;
