import React, { Component } from 'react'
import styled from 'styled-components'


const MainDiv=styled.div`
display: flex;
margin: 0 auto ;
height: 30%;
width: 100%;
justify-content: space-between;
flex-direction: row;
`
const FirstHeader=styled.div`
display: flex;
margin: 1% auto ;
height: 30%;
width: 100%;
justify-content: space-between;
flex-direction: row;
align-items: baseline;
`
const Logo = styled.img`
position: absolute;
margin: 1% auto ;
margin-left: 10% ;
justify-content: flex-start;
`
// const Sub= styled.div`
// margin: 4% auto ;
// justify-content: flex-end;
// `
const Home= styled.a`
margin: 2% auto ;

`

const Login = styled.button`

`
class frontpage extends Component {
  render() {
    return (
      <MainDiv>

        <FirstHeader>
            
            <Logo src="images/Logo.png">
            </Logo>
            </FirstHeader>
         <FirstHeader>   
            <Home>Home</Home>
            <Home>Pricing</Home>
            <Home>Support</Home>
            <Login>Login</Login>
            
        </FirstHeader>

      </MainDiv>
    )
  }
}

export default frontpage
