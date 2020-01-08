import React, { useState } from 'react'
import './FormRegistration.scss'

const FormRegistration = () => {
  const [login, setLogin] = useState(false)
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [confirmPasswordError, setConfirmPasswordError] = useState('')
  const [phone, setPhone] = useState('')
  const [phoneError, setPhoneError] = useState('')

  const onChangeUsername = event => {
    const value = event.target.value
    setUsername(value)
  }

  const onChangeEmail = event => {
    const value = event.target.value
    setEmail(value)
  }

  const onChangePassword = event => {
    const value = event.target.value
    setPassword(value)
  }

  const onChangeConfirmPassword = event => {
    const value = event.target.value
    setConfirmPassword(value)
  }

  const onChangePhone = event => {
    const value = event.target.value
    setPhone(value)
  }

  const onSubmit = event => {
    event.preventDefault()

    if (username === '' || username.length < 6) {
      setUsernameError(
        'Username should not be empty and shorter than 6 symbol!'
      )
    } else {
      setUsernameError('')
    }

    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/s
    if (email === '' || email.match(mailformat)) {
      setEmailError('Input should not be empty, and must have "@"')
    } else {
      setEmailError('')
    }

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    if (password.length < 6 || !password.match(passw)) {
      setPasswordError(
        'Password should not be empty, must be between 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter'
      )
    } else {
      setPasswordError('')
    }

    if (confirmPassword === '') {
      setConfirmPasswordError('Password should not be empty')
    } else if (!confirmPassword.match(password)) {
      setConfirmPasswordError('Passwords not does not match!')
    } else {
      setConfirmPasswordError('')
    }

    const phoneFormat = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/
    if (phone === '' || !phone.match(phoneFormat)) {
      setPhoneError('Phone must be in format like: +(123) - 456-78-90')
    } else {
      setPhoneError('')
    }

    if (
      usernameError !== '' &&
      emailError !== '' &&
      passwordError !== '' &&
      confirmPasswordError !== '' &&
      phoneError !== ''
    ) {
      setLogin(false)
    } else {
      setLogin(true)
    }
  }

  return (
    <div>
      <form className='jumbotron align-start'>
        {login && <h2 className='login'>Good! Login success!</h2>}

        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            className='form-control'
            id='username'
            name='username'
            placeholder='Enter username'
            onChange={onChangeUsername}
          />
          {usernameError !== '' && (
            <span className='form-text'>{usernameError}</span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email address</label>
          <input
            type='text'
            className='form-control'
            id='email'
            name='email'
            placeholder='Enter email'
            onChange={onChangeEmail}
          />
          {emailError !== '' && <span className='form-text'>{emailError}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            className='form-control'
            id='password'
            name='password'
            onChange={onChangePassword}
          />
          {passwordError !== '' && (
            <span className='form-text'>{passwordError}</span>
          )}
        </div>

        <div className='form-group'>
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input
            type='password'
            className='form-control'
            id='confirmPassword'
            name='confirmPassword'
            onChange={onChangeConfirmPassword}
          />
          {confirmPasswordError !== '' && (
            <span className='form-text'>{confirmPasswordError}</span>
          )}
        </div>
        
        <div className='form-group'>
          <label htmlFor='phone'>Phone</label>
          <input
            type='text'
            className='form-control'
            id='phone'
            name='phone'
            onChange={onChangePhone}
          />
          {phoneError !== '' && <span className='form-text'>{phoneError}</span>}
        </div>

        <button onClick={onSubmit} className='btn btn-success'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default FormRegistration
