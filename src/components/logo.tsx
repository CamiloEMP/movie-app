import React from 'react'

import logo from '../logo.webp'

export default function Logo() {
  return (
    <div className="mx-10 flex items-center justify-center w-48 h-20 bg-brand-primary rounded-lg">
      <img alt="logo Autoparti" className="scale-150" src={logo} />
    </div>
  )
}
