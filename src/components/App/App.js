import React, { useState, useEffect } from 'react'
import './App.css'

// router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// service
import API from '../../services/services'
import User from '../User/User'

// navigation
import Navigation from '../Navigation/Navigation'

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [name, setName] = useState(null)
  const [avatar, setAvatar] = useState(null)
  const [email, setEmail] = useState(null)

  useEffect(() => {
    API.get('/', {
      params: {
        results: 1,
        inc: 'name,email,picture'
      }
    }).then(data => {
      setIsLoading(false)
      setName(data.data.results[0].name.last)
      setAvatar(data.data.results[0].picture.large)
      setEmail(data.data.results[0].email)
    })
  }, [])

  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route
            path='/'
            render={() => <h2>Welcome to Vovk-Dashboard!</h2>}
            exact
          />
          <Route
            path='/user'
            render={() => (
              <User
                isLoading={isLoading}
                name={name}
                avatar={avatar}
                email={email}
              />
            )}
          />
          <Route render={() => <h2>Page not found! Pashol nahuy!</h2>} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
