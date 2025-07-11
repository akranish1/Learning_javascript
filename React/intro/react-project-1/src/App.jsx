import React from 'react'

 export default function App() {
  const array=[1,2,3,4,5];
  return (
      <div>
        { array.map(element=> <p>{element}</p> )}
      </div>
   )
}
