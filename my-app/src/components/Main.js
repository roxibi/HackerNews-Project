import React from 'react'
import Article from './Article'
function Main(props) {


  return (
    
    <div className='main'>
        <p>{JSON.stringify(props, null, 2)}</p>
        <p>Main </p>
    
    <Article />
    <Article />
    <Article />
    <Article />
    <Article />
    
    </div>
  )
}

export default Main