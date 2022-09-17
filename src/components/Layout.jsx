import React from 'react'

const Layout = ({children}) => {
  return (
    <main className='flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 w-screen h-screen'>
      {children}
    </main>
  )
}

export default Layout