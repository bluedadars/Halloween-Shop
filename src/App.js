
import Header from './Components/Header';
import Hero from './Components/Hero';
import Card from './Components/Card';
import Hero2 from './Components/Hero2';
import { Card2 } from './Components/Card2';
import Hero3 from './Components/Hero3';
import Card3 from './Components/Card3';
import Hero4 from './Components/Hero4';
import { Footer } from 'flowbite-react';
import Footerend from './Components/Footerend';
import { About } from './Components/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/about" element ={<About/>}/>
        


      </Routes>
      <Footerend/>
      </BrowserRouter>
    </div>
  );
}

export default App;
