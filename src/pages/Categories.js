import React from "react"
import './category.css'
import image2 from './image2.jpg';

function Category(){
    return (
        <div>
            <div className="cat">
                <center><h1>CATEGORIES</h1></center>
            </div>
            <div className="default">
        <div className="cat1"> 
           <div className = "thriller">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">THRILLER</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
        </div>

       
           <div className = "horror">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">HORRROR</h5>
                    <p class="card-text">BUY NOW</p>
                    <a href="#" class="btn btn-primary">Add to cart</a>
                </div>
                </div>
          </div>
            
        
       
           <div className = "fiction">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">FICTION</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
        
        
           <div className = "mystery">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">MYSTERY</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
        
         
           <div className = "romance">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">ROMANTIC</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
        
        
           <div className = "adventure">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">ADVENTURE</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
        
        
           <div className = "technology">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">COMEDY</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
          <div className = "historical">
            <div class="card" >
                <img src={image2} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">HISTORY</h5>
                    <p class="card-text"></p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>
          </div>
            
            
        


        
        </div>
 </div>      

    )
}
export default Category