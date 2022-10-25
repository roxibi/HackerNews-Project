import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {




  return (
    <div className="App">
      <header className="App-header">
     <Header />
     {hits.map((hit)=> <h3>{hit.title}</h3>)}
     <Main />
     <Footer />


      </header>
    </div>
  );
}

export default App;
