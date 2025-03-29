import React from 'react'
import Dither from "./components/Dither.jsx";
import './index.css'
import Navbar from "./components/Navbar.js";
import InfiniteMarquee from "./components/InfiniteMarquee.jsx";

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
        <div className={''}>
         <Navbar />
          <InfiniteMarquee />
        </div>
      </div>
      {/* announcement banner */}

    </div>
  )
}
