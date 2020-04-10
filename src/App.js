import React from "react";
import { Provider } from "react-redux";
import "./App.css";

import Searchbar from "./components/Searchbar";
import Videolist from "./components/Videolist";
import Videoplayer from "./components/Videoplayer";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <div className="searchbar-container">
          <Searchbar />
        </div>
        <div class="video-container">
          <Videoplayer />
          <Videolist />
        </div>
      </div>
    </Provider>
  );
}

export default App;
