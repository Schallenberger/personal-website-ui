import React, { useState } from 'react'
import { Dialog, PopoverGroup } from '@headlessui/react'
import { ModeToggle } from './ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { Button } from "./ui/button"
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <header className="bg-background bg-opacity-70 w-full sticky top-0 left-0 z-40">
      <nav className="mx-auto flex items-center justify-between py-6" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="text-md sm:text-2xl font-bold">@Brunoschallen</span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#" className="text-sm font-semibold leading-6">
            Home
          </a>
          <a href="#about" className="text-sm font-semibold leading-6">
            About
          </a>
          <a href="#experience" className="text-sm font-semibold leading-6">
            Experience
          </a>
        </PopoverGroup>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <Button variant="outline" size="icon" asChild>
            <Link href="https://www.instagram.com/brunoschallen/" target="_blank" rel="noopener noreferrer">
              <Instagram className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <Link href="https://www.linkedin.com/in/brunoschallenberger/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="icon">
            <Link href="https://github.com/schallenberger" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
            </Link>
          </Button>
          <ModeToggle />
        </div>
      </nav>
      <Dialog className="z-50 lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 w-full overflow-y-auto bg-background z-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">@brunoschallen</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-indigo-300"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-indigo-300"
                >
                  About
                </a>
              </div>
              <div className="py-6 flex flex-col gap-2">
                <Button variant="outline" size="icon" asChild>
                  <Link href="https://www.instagram.com/brunoschallen/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon">
                  <Link href="https://www.linkedin.com/in/brunoschallenberger/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon">
                  <Link href="https://github.com/schallenberger" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </Link>
                </Button>
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default Header
