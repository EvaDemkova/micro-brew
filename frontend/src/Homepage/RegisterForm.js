import React, { useState } from 'react'

const RegisterForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPasswordConfirm] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    let request_data = { email, name, password, password_confirmation }
    const response = await fetch('http://www.microbrew.test/register', {
      method: 'POST',
      body: JSON.stringify(request_data),
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
    })
    const response_data = await response.json()
    console.log(response_data)
  }

  return (
    <div className='user-form'>
      <h3>Registration form</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <div className='inputs'>
          <input
            type='text'
            name='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <label htmlFor='password_confirmation'>Confirm Password</label>
          <input
            type='password'
            name='password_confirmation'
            id='passwordConfirm'
            value={password_confirmation}
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button className='btn'>REGISTER</button>
      </form>
    </div>
  )
}

export default RegisterForm
