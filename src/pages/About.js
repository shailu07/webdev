 import React from "react";
 import{Link} from 'react-router-dom';
 
 function About() {
     return(
        
        <div clasName="aboutmain">
          <center><div><h1> ABOUT</h1></div></center>
          <p> <h4> An online book store is a virtual store on the internet where customers can browse the catalog ans select books of interest.
            At checkout time, the items in the e-library will be presented as an order. At that time,more information will be needed to
            complete the request. 
            This project intends different types of forms with many types of books like Thriller,Comdey,Fiction,History,Adventure,Horror etc......
            It can manage studying of books online, customers can choose many types of books categories, etc. Here, the user may select desired book and 
            view its price. The user may even search for specific books on the website.</h4> </p>
            
            <u><center><p><h2> Aims and Objectives:</h2> </p></center></u>
        
       <p><h4> The main objective of this project is to develop an e-book store where books can be studied from the comfort of home through internet.
       The objectives are :</h4>
        <ul><h4>
        <li>Saves alot of time.</li>
        <li>To provide an essence of online book store via simple and yet powerful medium.</li>
       <li> View books of all categories.</li>
       <li>Economical, quick and time convienet.</li></h4>
        </ul>
        </p>
        <p><u><center><h2> Benefits of Shopping With us:</h2></center></u>
        <ol><h4>
        <li>All types of Books available.</li>
        <li>Fast Shipping.</li>
       <li> 14days Easy Return / Refund / replacement Policy.</li>
       <li>Free Surprise Gift on Every Purchase.</li>
       <li>100% safe and secure payment /coustmer detail.</li>
       <li>24*7 coustmer support</li>
       <li>High Discount on bulk order.</li></h4>
        </ol>
        </p>
        <br/><br/>
        <center>
      <h3>you are in About page</h3>
        <Link to='/'>back to home</Link>
        </center>
       
      
    </div>
        
     )
 }
 export  default  About;