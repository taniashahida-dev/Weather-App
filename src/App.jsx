import { useState } from "react"
import Modal from "./components/Modal"

function App() {
  const [modal,setModal] = useState(false)
console.log(modal)
  return (
   <div className="max-w-50%  min-h-screen justify-center flex items-center ">
    <div className="space-y-2">
     <h1  className="text-7xl font-bold text-blue-500"> Next Level Weather app </h1>
     <div className="justify-center flex">
      <button onClick={()=>setModal(true)} className="bg-blue-400 text-white p-3 text-lg rounded-full ">
      Check Weather
     </button>
     </div>
      {modal && <Modal></Modal>
      
    }
    </div>
   
   </div>
  )
}

export default App
