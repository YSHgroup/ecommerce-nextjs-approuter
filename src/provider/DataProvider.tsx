import { Stringifier } from 'postcss'
import React from 'react'
const DataProvider = ({children, desired}: {children: React.ReactNode, desired: Stringifier }) => {
  const data = 'vite'
  const modifiedChildren = React.Children.map(children, (child) => {
    if(child?.type === desired) return React.cloneElement(child, {data})
    return child
  })
    return (
        <>
          {modifiedChildren}
        </>
    )
}

export default DataProvider