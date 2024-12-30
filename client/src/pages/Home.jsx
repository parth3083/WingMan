import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
      <div>Home
          <Link to={'/login'}>
          Loign pAGE
          </Link>

    </div>
  )
}

export default Home