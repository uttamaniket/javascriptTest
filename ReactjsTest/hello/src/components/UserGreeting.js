import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(){
        super()
        this.state ={
            isLoggedIn: true
    }
    }
  render() {
    return this.state.isLoggedIn ? (
        <div> Welcome Shiv</div>) :
        (<div>Welcome Guest</div>    )

    //   let message
    //    if(this.state.isLoggedIn){
    //        message = <div> Welcome Shive</div>
    //    } else{
    //        message = <div> Welcome Guest</div>
    //    }

    //    return <div>{message}</div>
    //   if (this.state.isLoggedIn){
    //       return <div>Welcome Shiv</div>
    //   }else {
    //       return <div>Welcome Gust</div>
    //   }
    // return (
    //   <div>
    //     <div> Welcome Shiv</div>
    //     <div> Elcome Gust</div>
    //   </div>
    // )
  }
}

export default UserGreeting
