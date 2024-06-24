import React from 'react'

function Print({Nation,Population, Year }) {
  return (
    <div style={{margin:"10px"}}>
      <div><b>Nation : </b>{Nation}</div> 
      <div><b>Population : </b>{Population}</div>
      <div><b>Year : </b>{Year}</div>
    </div>
  )
}

export default Print
