import React from 'react';
import{Link} from 'react-router-dom';
import image2 from './image2.jpg';
import Login from './Login';
import Cart from './Cart';
import Contact from './Contact';
import Wishlist from './Wishlist';
import FAQs from './FAQs';
import About from './About';
import Adventure from './Adventure'
import Comedy from './Comedy';
import Fiction from './Fiction';
import History from './History';
import Thriller from './Thriller';
import Horror from './Horror';
import Mystery from './Mystery';
import Category from './Categories';
import signup from './Signup';




function Home(){
  return (
    <div className='main'>
      <nav class="navbar" >
            <div class="container-fluid">
            <i class="fa-solid fa-book-open-reader fa-5x"></i>
            
              <h1><a  href="index.html" class="navbar-brand" > Bookstore</a></h1>
              <form class="d-flex" role="search" fa-5x>
                <input class="form-control me-2" type="search"  placeholder="search here...." aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
              </form>
              
            </div>          
            </nav>
          <div class="a d-flex ">
                    <ul class="nav nav-tabs">
                           <li class="nav-item" >
                           <a class="nav-link " aria-current="page" href=" ">Home</a>
                            </li>
                            <li class="nav-item dropdown" >
                                  <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="index.html" role="button" aria-expanded="false">Categories</a>
                                <ul class="dropdown-menu">
                                    <li> <Link to='/Thriller' className='nav-link'>Thriller</Link></li>
                                    <li> <Link to='/Horror' className='nav-link'>Horror</Link></li>
                                    <li> <Link to='/Fiction' className='nav-link'>Fiction</Link></li>
                                    <li> <Link to='/Mystery' className='nav-link'>Mystery</Link></li>
                                    <li> <Link to='/Adventure' className='nav-link'>Adventure</Link></li>
                                    <li> <Link to='/Comedy' className='nav-link'>Comedy</Link></li>
                                    <li> <Link to='/History' className='nav-link'>History</Link></li>
                                </ul>
                            </li>
                            <li class="nav-item" >
                            <Link to='/About' className='nav-link'>About</Link>
                            </li>
                              <li class="nav-item" >
                                  <Link to='/Contact' className='nav-link'>Contact</Link>
                               </li>
                                <li class="nav-item" >
                                <Link to="/FAQs" className='nav-link'>FAQs</Link>
                                </li>
                                <li class="nav-item" >
                                <Link to='/Wishlist' className='nav-link'>Wishlist</Link>
                            </li>
                            <li class="nav-item" >
                            <Link to='/Cart' className='nav-link'>Cart</Link>
                            </li>
                                <li class="nav-item" >
                                <Link to='/Login' className='nav-link'>Login/Signup</Link>
                                </li>
                           
                      </ul>
                      
                      
                </div>
                     <div class="b">
                          <img src={image2} alt="" width="100%" height="500px"/>
                         <h1> <div class="top-left">"Books  give a soul to the universe
                           <div>wings to the mind, flight </div>
                           <div> to the imagination,</div>
                           <div>and life to everything."</div>
                           </div></h1>
                      </div>
                      <center>
      <h3>welcome to Home page</h3>
        <Link to='/'>back to home</Link>
        </center>
    
    </div>

          
        

    
    
  )
}

export default Home;