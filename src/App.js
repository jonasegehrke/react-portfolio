import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Brief';
import About from './pages/About';
import { useRef, useEffect, useState } from 'react';
import Skills from './pages/Skills';
import RandomMovingDiv from './components/RandomMovingDiv';
import $ from 'jquery';
import Slider from './components/Slider';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const appRef = useRef();

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    if (width > 767.98) {
      animateDiv('.a')
      animateDiv('.b')
      animateDiv('.c')
      animateDiv('.d')
    }
  })

  function makeNewPosition() {

    // Get viewport dimensions (remove the dimension of the div)
    var h = $(window).height() - 50;
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv(myclass) {
    var newq = makeNewPosition();
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
      animateDiv(myclass);
    });

  };

  function setStickyPage() {
    appRef.current.classList.toggle('sticky')
  }

  return (
    <div ref={appRef} className="App">
      <NavBar setStickyPage={setStickyPage} />
      <RandomMovingDiv className={"b"} />
      <Home />
      <RandomMovingDiv className={"c"} />
      <RandomMovingDiv className={"d"} />
      <About />
      <RandomMovingDiv className={"a"} />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
