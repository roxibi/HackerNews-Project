import React from 'react'
import Article from './Article'
import data from './data.json'

function Main() {
    const {hits}=data;
const article=()=> {hits.map((hit)=> <h3>{hit.title}</h3>)}
  return (
    <div className='main'>
        <p>Main </p>
    
       
    
    </div>
  )
}

export default Main