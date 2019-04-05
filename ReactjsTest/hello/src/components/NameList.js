import React, { Component } from 'react'
import Person from './Person'

function NameList(person) {
    const names = [ 'Bruce', "clark", 'Diana','Bruce'] 
    const persons = [
        {
            id: 1,
            name: 'Shiv',
            age: 35,
            skill: 'Vue'
        },
        {
            id: 2,
            name: 'aman',
            age: 25,
            skill: 'React'
        },
        {
            id: 3,
            name: 'pragesh',
            age: 30,
            skill: 'Nextjs'
        }
    ]
    // const names = ['Shiv ',  'Pragesh', 'Aman']
        const personList = persons.map(person => <Person key={person.id} person= {person}/>)
    return (
      <div>
          {personList}
        {/* {names.map(name => <h2>{name}</h2>)} */}
        {/* <h2>{names[0]}</h2>
        <h2>{names[1]}</h2>
        <h2>{names[2]}</h2> */}
      </div>
    )
  
}


export default NameList
