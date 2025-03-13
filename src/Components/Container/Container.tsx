import React from 'react'

function Container({children}:{children:React.ReactNode}) {
  return (
    <div className='
      p-2 mx-auto w-10/12
    '>
      {children}
    </div>
  )
}

export default Container
