import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home.js";
import SingleBlog from "./components/SingleBlog/SingleBlog.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={Home} path="/" exact />
        <Route component={SingleBlog} path="/:slug" />
      </div>
    </BrowserRouter>
  );
}
export default App;