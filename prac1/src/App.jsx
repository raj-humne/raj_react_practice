import React, { useState } from 'react'
import products from '/.products'
function App(){
  var[a,b] = useState(34) 
  return (
    <div className='h-screen w-full bg-zinc-900 text-white'>
    <products />
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