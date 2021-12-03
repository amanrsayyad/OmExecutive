import React from 'react';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home';
import Contactus from './Pages/Contactus';
import Tourism from './Pages/Tourism';
import Gallery from './Pages/Gallery';
import BookNow from './Pages/BookNow';
import Footer from './Pages/Footer';
import RoomDetail from './Pages/RoomDetail/RoomDetail';
import Whatsapp from './Component/Whatsapp/Whatsapp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Whatsapp />
        <Route path='/' exact component={Home} />
        <Route path='/Tourism' exact component={Tourism} />
        <Route path='/Gallery' exact component={Gallery} />
        <Route path='/BookNow' exact component={BookNow} />
        <Route path='/Contactus' exact component={Contactus} />
        <Route path='/RoomDetail' exact component={RoomDetail} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
