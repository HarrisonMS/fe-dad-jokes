import React, { useState } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();
  //setting up local state to handle form data
  const [ creds, setCreds ] = useState({
    username: '',
    password: ''
  })
  //onchange handler to set state to value of input fields
  console.log(creds)
  const handleChange = e => {
    e.preventDefault();
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = event => {
    event.preventDefault();
    const endpoint = 'https://dadjokess.herokuapp.com/api/auth/login';

  axios
    .post(endpoint, creds)
    .then(response => {
      console.log('res in login post',response)
      const token = (response.data.token);
      console.log('token stringified',token)
      localStorage.setItem('token', token);
      history.push('/jokes');
      console.log('history',history)
    })
    .catch(error => console.log('can not seem to login buddy', error));
      setCreds({
        username: '',
        password: ''
      })
  }
  return(
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input 
        type='text' 
        name='username' 
        value={creds.username} 
        onChange={handleChange} />
      </label>
      <label>
        Password:
        <input 
        type='password' 
        name='password' 
        value={creds.password} 
        onChange={handleChange} />
      </label>
        <button 
          type="submit" >
          Login!
        </button>
      </form>
    </div>
  )
}
export default Login
