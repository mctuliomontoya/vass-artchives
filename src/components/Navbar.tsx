import {ReactElement} from 'react'
import * as React from 'react'

type NavbarProps = {
  announcementBanner?: ReactElement
}

export default function Navbar({announcementBanner}: NavbarProps): ReactElement {
  return (
    <React.Fragment>
      <nav className={`flex justify-between  justify-center w-full h-[4rem] bg-black/30 backdrop-blur`}>
        {/*  logo*/}
        <img src="/vass.png" alt="vass logo" className='h-[100%]'/>
        {/*  nav items*/}
      </nav>
      {announcementBanner}
    </React.Fragment>
  )
}
