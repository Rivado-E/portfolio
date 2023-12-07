import './App.css';
import './components/Header'
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Footer from './components/Footer';
const App = () => {
  return (
    <div id="app" className="App">
      <Header />
      <Body />
      <About />
      <Footer />
    </div>
  );
}

export default App;
