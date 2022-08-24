import React from 'react';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Horror from './pages/Horror';
import Comedy from './pages/Comedy';
import Mystery from './pages/Mystery';
import Adventure from './pages/Adventure';
import Fiction from './pages/Fiction';
import Thriller from './pages/Thriller';
import History from './pages/History';
import Signup from './pages/Signup';


const App = () => {
  return (
  <>

    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/faqs' element={<FAQs/>}/>
        <Route path='/wishlist' element={<Wishlist/>}/>
        <Route path='/horror' element={<Horror/>}/>
        <Route path='/comedy' element={<Comedy/>}/>
        <Route path='/mystery' element={<Mystery/>}/>
        <Route path='/history' element={<History/>}/>
        <Route path='/adventure' element={<Adventure/>}/>
        <Route path='/fiction' element={<Fiction/>}/>
        <Route path='/thriller' element={<Thriller/>}/>
        <Route path='/signup' element={<Signup/>}/>

      </Routes>
      </BrowserRouter>
      
    </div>
    </>)
}

export default App;