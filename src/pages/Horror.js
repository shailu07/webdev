import React from 'react';
import{Link} from 'react-router-dom';
import image2 from './image2.jpg';
const Horror = () => {
  return (
    <div className='mainhorror'>
       <div className="head">
               <u> <center><h1>Horror</h1></center></u>
            </div>
            <table cellPadding={150} cellSpacing={200}>
            <tr>
                  <td>
                        <div className = "book1">
                      <div class="card" >
                          <img src={image2} class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">book1</h5>
                              <p class="card-text">BUY NOW</p>
                              <a href="#" class="btn btn-primary">Add to cart</a>
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                    <div className = "book2">
                      <div class="card" >
                          <img src={image2} class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">book2</h5>
                              <p class="card-text">BUY NOW</p>
                              <a href="#" class="btn btn-primary">Add to cart</a>
                          </div>
                      </div>
                  </div>
              </td>
              <td>
                    <div className = "book3">
                      <div class="card" >
                          <img src={image2} class="card-img-top" alt="..."/>
                          <div class="card-body">
                              <h5 class="card-title">book3</h5>
                              <p class="card-text">BUY NOW</p>
                              <a href="#" class="btn btn-primary">Add to cart</a>
                          </div>
                      </div>
                  </div>
              </td>
         </tr>
          <tr>
                  <td><div className = "book4">
                    <div class="card" >
                        <img src={image2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">book4</h5>
                            <p class="card-text">BUY NOW</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div></td>
                <td><div className = "book5">
                    <div class="card" >
                        <img src={image2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">book5</h5>
                            <p class="card-text">BUY NOW</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div></td>
                <td><div className = "book6">
                    <div class="card" >
                        <img src={image2} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">book6</h5>
                            <p class="card-text">BUY NOW</p>
                            <a href="#" class="btn btn-primary">Add to cart</a>
                        </div>
                    </div>
                </div></td>
          </tr>
          </table>
   
       <center>
       
      <h3>you are in Horror page</h3>
        <Link to='/'>back to home</Link>
        </center>
    </div>
  )
}

export default Horror