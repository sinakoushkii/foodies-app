'use client'

import React from 'react'

const Error = ({error,reset}) => {
  return (
    <main className='error'>
        <h1>{error.message}</h1>
        <p>Failed to fetch meals data. Please try again later.</p>

    </main>
  )
}

export default Error