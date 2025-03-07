'use client'

import React from 'react'

const Error = ({error,reset}) => {
  return (
    <main className='error'>
        <h1>{error.message}</h1>
        <p>Failed to save the meal.</p>

    </main>
  )
}

export default Error