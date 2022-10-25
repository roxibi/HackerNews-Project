import './App.css';
import data from './data.json'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
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
