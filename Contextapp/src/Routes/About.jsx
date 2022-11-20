import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext'

const About = () => {
  const {Auth}=useContext(AuthContext)

  return (
    <div>welcome to About:{Auth}</div>
  )
}

export default About