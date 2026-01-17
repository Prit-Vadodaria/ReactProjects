import "./App.css";
import Navbar from "./components/Navbar";
import React, { Component } from "react";
import Newz from "./components/Newz";
import { BrowserRouter, Routes, Route } from "react-router";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Newz
                  key="general"
                  pageSize={10}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <Newz
                  key="business"
                  pageSize={10}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <Newz
                  key="entertainment"
                  pageSize={10}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <Newz
                  key="health"
                  pageSize={10}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <Newz
                  key="science"
                  pageSize={10}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <Newz
                  key="sports"
                  pageSize={10}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <Newz
                  key="technology"
                  pageSize={10}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
