import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user.context'


function Home() {
  const {user} = useContext(UserContext)
  return (
    <div>
     {JSON.stringify(user)}
    </div>
  )
}

export default Home