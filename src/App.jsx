import React from 'react'
import Dither from "./Dither.jsx";
import './index.css'

export default function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center bg-black overflow-hidden relative'>
      <Dither
        waveColor={[0.4, 0.4, 0.4]}
        disableAnimation={false}
        enableMouseInteraction={false}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.02}
      />

      {/*main container*/}
      <div className={`absolute w-full h-full`}>
        {/*Nav*/}
        <nav className={`flex justify-between absolute justify-center w-full h-[4rem] bg-black/30 backdrop-blur`}>
          {/*  logo*/}
            <img src="/vass.png" alt="vass logo" className='h-[100%]'/>
          {/*  nav items*/}
        </nav>
        <div className={`w-full h-full flex justify-center items-center`}>
          <div className={`text-white text-4xl`}>
            <h1 className={`text-4xl`}>Dither</h1>
            <p className={`text-2xl`}>A simple dithering effect</p>
          </div>
        </div>
      </div>
    </div>
  )
}
