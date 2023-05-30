import React from 'react'
import Person from '../Person'

const personlis = () => 
{
    const persons=[
        {
           id:1,
           name:"abhi",
           age:21,
           skill:"Java",
        },
        {
            id:2,
            name:"avishekh",
            age:22,
            skill:"Java",
         },
         {
            id:3,
            name:"sushanth",
            age:22,
            skill:"Python",
         },
         {
            id:4,
            name:"anvesh",
            age:22,
            skill:"Java",
         }
   ]
   const personlist=persons.map(person => <Person person={person}> </Person>)
  return (
    <div>
         {personlist}
    </div>
  )
}

export default personlis