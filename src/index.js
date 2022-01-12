import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";

import Header from "./components/header/header";
import SlideShow from "./components/slide-show/slide-show";

import Pricing from "./sections/pricing";
import Jamie from "./sections/jamie";
import About from "./sections/about";
import Testimonials from "./sections/testimonials";

ReactDOM.render(
  <React.StrictMode>
    <Header maxWidth="6xl" />
    <div className="mt-20 md:mt-28 w-full max-w-6xl mx-auto">
      <SlideShow />
      <Jamie />
      <About />
      <Pricing />
      <Testimonials />
      <div className="h-24" />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
