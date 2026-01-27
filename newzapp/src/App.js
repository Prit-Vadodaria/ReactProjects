import "./App.css";
import Navbar from "./components/Navbar";
import React from "react";
import Newz from "./components/Newz";
import { BrowserRouter, Routes, Route } from "react-router";

export default function App() {
  const pageSize = 9;

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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
                pageSize={pageSize}
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
