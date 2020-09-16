import React,{useState}from 'react';
import './Signin.css'
import {Button} from '../../components/Button/Button';
import {Link} from 'react-router-dom';

const Signin = () => {
  const [userCredential,setUserCredential] = useState({email:'',password:''})

  const handleChange =(event)=>{
    const {name,value} = event.target;
    setUserCredential({...userCredential,[name]:value})
  }

  const {email,password} = userCredential;

  const handleSubmit =(event)=>{
    event.preventDefault();
    setUserCredential({email:'',password:''})
  }
  return (
    <>
    <div className="signin-form">
      <h1>Sign In</h1>
        <form className='signin-container'>
         <input 
          name='email'
          type='email'
          value={email}
          className="input-box" 
          placeholder='Your email'
          onChange={handleChange} required/>
        <input
          name='password' 
          type='password'
          value={password} 
          className='input-box' 
          placeholder='Your password'
          onChange={handleChange} required/>
        <p><span><input type='checkbox'/></span>I agree to the terms and services</p>

        <Button buttonSize='btn--wide' buttonColor='blue' onClick={handleSubmit}>Sign In</Button>
        <p className='p'>Don't have an account.  <Link to='/signup' className='signup'>Sign Up</Link></p>
      </form>
    </div>
     
    </>
  )
}

export default Signin;

