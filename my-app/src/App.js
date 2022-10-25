import './App.css';
import data from './data.json'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
const {hits}=data;


// {hits.map((hit)=> <h3>{hit.title}</h3>)}
  return (
    <div className="App">
      <header className="App-header">
     <Header />
     
     <Main hits={hits}/>
     <Footer />


      </header>
    </div>
  );
}

export default App;
