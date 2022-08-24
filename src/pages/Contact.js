import React from 'react';
import{Link} from 'react-router-dom';
import contact from './contact.css';

const Contact = () => {
  return (
    <div>
     <center>
     <div>
  <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <h5 class="title">Contact us</h5>
      <p class="description">Feel free to contact us if you need any assistance, any help or another question.
      </p>
      <div>
        <input type="text" class="form-control rounded border-white mb-3 form-input" id="name" placeholder="Name" required/>
      </div>
      <div>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
        <textarea id="message" class="form-control rounded border-white mb-3 form-text-area" rows="5" cols="30" placeholder="Message" required></textarea>
      </div>
      <div class="submit-button-wrapper">
        <input type="submit" value="Send"/>
      </div>
    </form>
  </div>
</div>
      <h3>you are in Contact page</h3>
        <Link to='/'>back to home</Link>
        </center>
    </div>
  )
}

export default Contact;