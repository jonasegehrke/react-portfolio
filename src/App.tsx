import './App.css';
import NavBar from './components/NavBar';
import Home from './pages/Brief';
import About from './pages/About';
import { useRef, useEffect, useState } from 'react';
import RandomMovingDiv from './components/RandomMovingDiv';
import * as $ from 'jquery';
import Slider from './components/Slider';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  const [width, setWidth] = useState(window.innerWidth)

  const appRef = useRef<null | HTMLDivElement>(null);

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

    // @ts-ignore
    var h = $(window).height() - 50;
    // @ts-ignore
    var w = $(window).width() - 50;

    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);

    return [nh, nw];

  }

  function animateDiv(myclass: string) {
    var newq = makeNewPosition();
    // @ts-ignore
    $(myclass).animate({ top: newq[0], left: newq[1] }, 10000, function () {
      animateDiv(myclass);
    });

  };

  function setStickyPage() {
    appRef.current?.classList.toggle('sticky')
  }

  return (
    <div ref={appRef} className="App">
      <Slider/>
      <NavBar setStickyPage={setStickyPage} />
      <RandomMovingDiv className={"b"} />
      <Home />
      <RandomMovingDiv className={"c"} />
      <RandomMovingDiv className={"d"} />
      <About />
      <RandomMovingDiv className={"a"} />
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
