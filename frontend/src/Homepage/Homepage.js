import React, { useState, useEffect } from 'react'
import './homepage.scss'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const Homepage = () => {
  const [isLoginForm, setIsLoginForm] = useState(false)
  const [isRegisterForm, setIsRegisterForm] = useState(false)

  useEffect(() => {
    if (isLoginForm || isRegisterForm) {
      const filter = document.querySelector('.filter')
      filter.addEventListener('click', () => {
        setIsLoginForm(false)
        setIsRegisterForm(false)
      })
      return () => {
        filter.removeEventListener('click', () => {
          setIsLoginForm(false)
          setIsRegisterForm(false)
        })
      }
    }
  }, [isLoginForm, isRegisterForm])

  return (
    <div className='homepage'>
      <h1>Micro Brew</h1>
      <div className='interface'>
        <h3>Micro Brew</h3>
        <h4>Brew, Enjoy, Repeat</h4>
        <button className='btn btn-login' onClick={() => setIsLoginForm(true)}>
          Login
        </button>
        <button
          className='btn btn-register'
          onClick={() => setIsRegisterForm(true)}
        >
          Register
        </button>
      </div>
      {(isLoginForm || isRegisterForm) && <div className='filter'></div>}
      {isLoginForm && <LoginForm />}
      {isRegisterForm && <RegisterForm />}
    </div>
  )
}

export default Homepage
