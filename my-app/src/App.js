import "./App.css";
import data from "./data.json";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  //const { hits } = data; same thing as below
  //const hits = data.hits;

  // {hits.map((hit)=> <h3>{hit.title}</h3>)}
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Footer />
      </header>
    </div>
  );
}

export default App;
