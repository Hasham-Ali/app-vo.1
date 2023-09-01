import './App.css';
import { useState } from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Home from './pages/home/home';
import Movies from './pages/movies/movies';
import Softwares from './pages/softwares/softwares';
import Games from './pages/games/games';

function App() {

  var [pageName, setPageName] = useState("Home");
  var changePageName = (pageName) =>{ setPageName(pageName)};


  return (
    <div className="App">

      <Header changePageName={changePageName} currentPage={pageName}/>

      {pageName === "Home" && <Home/>}
      {pageName === "Movies" && <Movies/>}
      {pageName === "Games" && <Games/>}
      {pageName === "Softwares" && <Softwares/>}

      

      <Footer/>
    </div>
  );
}

export default App;