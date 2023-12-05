import React from 'react'

function SubTitleProducts({title,count}) {
  return (
    <div style={{borderRadius:'10px'}} className='bg-dark my-3 px-3 text-light d-flex justify-content-center align-items-center'>
        <h2 className='mx-2'>{count}</h2>
        <h5 className='mx-2 text-warning'> {title}</h5>
        </div>
  )
}

export default SubTitleProducts