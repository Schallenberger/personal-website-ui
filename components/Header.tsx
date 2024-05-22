import React from 'react'
import { ModeToggle } from './ThemeToggle'
import { Button } from "./ui/button"

const Header = () => {
  return (
    <header id="header" className="w-full">
      <nav className="mx-auto flex items-center justify-between">
        <div className='flex items-center gap-4'>
          <div className="text-lg font-bold">@Brunoschallen</div>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-md font-semibold">Home</a></li>
            <li><a href="#" className="text-md font-semibold">About</a></li>
            <li><a href="#" className="text-md font-semibold">Services</a></li>
            <li><a href="#" className="text-md font-semibold">Contact</a></li>
          </ul>
        </div>
        <ul>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
