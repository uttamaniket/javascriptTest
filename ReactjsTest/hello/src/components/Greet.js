import React from 'react'

const Greet = (props) => {
   const {name, hero}  = props
    //name = 'Vishuas'
    return (
        <div>
    <h1> Hello {name} a.k.u {hero}</h1>
    
    </div>
    )
}

export default Greet