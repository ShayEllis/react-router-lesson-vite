import { useState } from 'react';
import './App.css';

import Header from "../components/Header";
import Footer from "../components/Footer";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Author from "../components/Author";
import Profile from "../components/Profile";

function App() {
  return (
    <div>
      <Header />
      <main>
        {/* Add routes here! */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
