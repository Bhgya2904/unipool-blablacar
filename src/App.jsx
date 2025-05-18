import React from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import SearchBox from "./components/SearchBox";
import Features from "./components/features";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import 'react-datepicker/dist/react-datepicker.css';


function App() {
  return (
    <div className="blablacar-app">
      <Header />
      <Banner />
      <SearchBox />
      <Features />
      <Footer />
    </div>
  );
}

export default App;