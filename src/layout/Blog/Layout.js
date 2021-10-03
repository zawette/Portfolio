import React from 'react'

import Header from '../../components/Blog/Header/Header'

export const Layout = ({children}) => {
  return (
    <div>
     <Header/>
     <main>{children}</main> 
    </div>
  )
}