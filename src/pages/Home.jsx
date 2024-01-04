import React from 'react'
import { useState } from 'react'
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";




const Home = () => {

  const [password, setPassword] = useState("")
  const [visible, setVisible] = useState(true)


  return (
    <div className='w-full h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 flex flex-col gap-5 justify-center items-center'>

      <h1 className='text-white text-7xl font-bold font-mono'>
        PassWord Blinker
      </h1>

      <div className='w-1/2 h-1/4 border flex justify-center items-center '>

        <div className=''>

          <form className='flex '>

            <label className='text-white text-2xl' htmlFor="Password">Password: </label>
            <div className='mx-2 bg-white px-2 flex justify-center items-center rounded-sm'>

              <input className='outline-none'
                type={visible ? "text" : "password"}
                value={password}
                id="Password"
                onChange={(e) => setPassword(e.target.value)}
                
              />

              <div className='hover:bg-slate-300' onClick={()=>setVisible(!visible)}>
                {visible ? <IoMdEye /> : <IoMdEyeOff />}
              </div>

            </div>


          </form>


        </div>

      </div>

    </div>
  )
}

export default Home
