import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading() {
  return (
    <div className='w-100 d-flex justify-content-center'>
            <h2>جاري التحميل .....</h2>
            <Spinner animation="border" variant="primary" />
            </div>
  )
}

export default Loading