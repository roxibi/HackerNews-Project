
import './App.css';
import NewsPage from "./NewsPage";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <>
    <header className="App-header">
        <Header />
    </header>
   <NewsPage />
   <Footer />
   </>
  );
}

export default App;