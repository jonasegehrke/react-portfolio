import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Brief';
import About from './pages/About';
import { useRef } from 'react';

function App() {

  const appRef = useRef();

  function setStickyPage(){
    appRef.current.classList.toggle('sticky')
  }

  return (
    <div ref={appRef} className="App">
      <NavBar setStickyPage={setStickyPage}/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;
