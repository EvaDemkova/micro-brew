import React from 'react'

const RegisterForm = () => {
  return (
    <div className='user-form'>
      <h3>Registration form</h3>
      <form>
        <label htmlFor='email'>Email</label>
        <input type='email' name='email' id='email' />
        <label htmlFor='password'>Password</label>
        <input type='password' name='password' id='password' />
        <label htmlFor='repeat-pass'>Repeat Password</label>
        <input type='password' name='repeat-pass' id='repeat-pass' />
        <button className='btn'>REGISTER</button>
      </form>
    </div>
  )
}

export default RegisterForm
