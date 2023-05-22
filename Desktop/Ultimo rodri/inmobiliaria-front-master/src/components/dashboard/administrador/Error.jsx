import React from 'react'

const Error = ({children}) => {
  return (
    <div className='bg-red-700 w-full text-white text-center p-2 mt-2 font-bold uppercase rounded-md'>
        <p>{children}</p>
    </div>
  )
}

export default Error