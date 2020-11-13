import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(email, password)

    await axios.get('http://www.microbrew.test/sanctum/csrf-cookie')

    const response = await axios
      .post('http://www.microbrew.test/login', {
        email,
        password,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    const response2 = await axios
      .get('http://www.microbrew.test/api/user')
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    // console.log(response);
  }

  return (
    <div className='user-form'>
      <h3>Login form</h3>
      <form onSubmit={handleSubmit}>
        <div className='inputs'>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            name='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='btn'>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm
