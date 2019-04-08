import React, { Component } from 'react'

function Columns() {
 const items = [] 
  
    return (
      <React.Fragment>
        {
           items.map(item =>(
                <React.Fragment key={item.id}>
                    <h1>Title</h1>
                    <p>{item.title}</p>
                </React.Fragment>
            )
            )
        }
        <td>Nmae</td>
        <td>Aniket</td>
      </React.Fragment>
    )
  
}

export default Columns
