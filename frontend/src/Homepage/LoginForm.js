import React from 'react'

const LoginForm = () => {
  return (
    <div className='user-form'>
      <h3>Login form</h3>
      <form>
        <div className="inputs">
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' id='email' />
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' id='password'  />
        </div>
        <button className='btn'>LOGIN</button>
      </form>
    </div>
  )
}

export default LoginForm
