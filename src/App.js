import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Brief';
import About from './pages/About'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
