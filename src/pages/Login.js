import React from 'react'
import{Link} from 'react-router-dom';
import login from './login.css';



const Login = () => {
  return (
    <div className='logmain'>
      <div class="contact-form-wrapper d-flex justify-content-center">
    <form action="#" class="contact-form">
      <div>
      <label className='lab'>Username:</label><br/>
        <input type="email" class="form-control rounded border-white mb-3 form-input" placeholder="Email" required/>
      </div>
      <div>
      <label for="psw">Password:</label><br/>
   <  input type="password"  class="form-control rounded border-white mb-3 form-input" placeholder="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required/>
      </div>
      <center>
      <div class="checkbox">
      <input type="checkbox" name="" id="remember-me"/>
      <label for="remember-me"> remember me</label>
        </div></center><br/>
      <div class="submit-button-wrapper">
        <input type="submit" value="Login"/><br/>
      </div><br/>
      <p>forget password ? <a href="index.html">click here</a></p>
       <p>don't have an account ? <a><Link to='/Signup' className='nav-link'>create one</Link></a></p>
     
    </form>
  </div> #endoflogin form
                <center>
                <h3>you are in Login page</h3>
                <Link to='/'>back to home</Link>
                </center>
    </div>
  )
}

export default Login;