import React, { useState } from 'react'

function App(){
  var[a,b] = useState(34) 
  return (
    <div className='h-screen w-full bg-zinc-900 text-white'>
      <h1 className='text-4xl text-white'>Counter</h1>
      <h1>{a}</h1>
      <button  onClick = {()=>b(a+1)} className='bg-green-950 text-zinc-500}'>Click to increase the count</button>
    </div>
  )
}

export default App
// import React, { useState } from 'react'
// function App() {
//   var[a,b]=useState(34);
//   return (
//     <div className='bg-zinc-900 text-2xl w-full h-screen text-white'>App
//     <h1>{a}</h1>
//     <button onClick={()=>b(a+1)} className='bg-zinc-400 text-black w-30 h-10 rounded-2xl'>Click</button>
//     </div>
//   )
// }

// export default App