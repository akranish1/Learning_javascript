import { useState, useEffect} from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

   //variation 2:
   //that runs on only first render:
  // useEffect(() => {
  //   alert('i will run only once')
  // }, [])

  //3rd Variation:
  // useEffect(()=>{
  //   alert("I will run only when count changes")
  // },[count])

  //4th Variation:
  //let's add a cleanup function:
//   useEffect(() => {
// alert('count is updated')
//     return () => {
//       alert('count is unmounted from ui')
//     }
//   }, [count])
//if count is updated than it will unmount first and then mount again

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <>
     <button onClick={handleClick}> click me</button>
     <br />
     Count is {count}
    </>
  )
}

export default App
