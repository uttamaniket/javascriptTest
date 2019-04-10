import React from 'react'

// function FRinput() {
//   return (
//     <div>
//       <input type="text" />
//     </div>
//   )
// }

const FRinput = React.forwardRef((props, ref) => {
    return(
        <input type = "text" ref={ref}/>
    )
}
)
export default FRinput
