'use client'

import React, { useState, useCallback, memo } from 'react'
import { Dialog } from '@headlessui/react'
import { ModeToggle } from './ThemeToggle'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid'
import { Button } from "./ui/button"
import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'

const SocialButton = memo(({ href, icon: Icon, label }: { href: string; icon: React.ElementType; label: string }) => (
  <Button variant="outline" size="icon" asChild>
    <Link href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon className="h-4 w-4" />
    </Link>
  </Button>
))

SocialButton.displayName = 'SocialButton'

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavLink = memo(({ href, children, onClick }: NavLinkProps) => (
  <Link 
    href={href} 
    className="text-sm font-semibold leading-6 hover:text-primary transition-colors"
    onClick={onClick}
  >
    {children}
  </Link>
))

NavLink.displayName = 'NavLink'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev)
  }, [])

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false)
  }, [])

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      closeMobileMenu()
    }
  }, [closeMobileMenu])

  return (
    <header className="bg-background/70 backdrop-blur-sm w-full sticky top-0 left-0 z-40">
      <nav className="mx-auto flex items-center justify-between py-6 px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-md sm:text-2xl font-bold">@Brunoschallen</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">Toggle menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <NavLink href="/">Home</NavLink>
          <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</NavLink>
          <NavLink href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</NavLink>
          <NavLink href="/coolArea">Cool Area</NavLink>
        </div>
        <div className="hidden gap-2 lg:flex lg:flex-1 lg:justify-end">
          <SocialButton href="https://www.instagram.com/brunoschallen/" icon={Instagram} label="Instagram" />
          <SocialButton href="https://www.linkedin.com/in/brunoschallenberger/" icon={Linkedin} label="LinkedIn" />
          <SocialButton href="https://github.com/schallenberger" icon={Github} label="GitHub" />
          <ModeToggle />
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={closeMobileMenu}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={closeMobileMenu}>
              <span className="text-md sm:text-2xl font-bold">@Brunoschallen</span>
            </Link>
            <Button variant="ghost" size="icon" onClick={closeMobileMenu}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink href="/" onClick={closeMobileMenu}>Home</NavLink>
                <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>About</NavLink>
                <NavLink href="#experience" onClick={(e) => scrollToSection(e, 'experience')}>Experience</NavLink>
                <NavLink href="#coolArea" onClick={(e) => scrollToSection(e, 'experience')}>Cool Area</NavLink>
              </div>
              <div className="py-6 flex flex-wrap gap-2">
                <SocialButton href="https://www.instagram.com/brunoschallen/" icon={Instagram} label="Instagram" />
                <SocialButton href="https://www.linkedin.com/in/brunoschallenberger/" icon={Linkedin} label="LinkedIn" />
                <SocialButton href="https://github.com/schallenberger" icon={Github} label="GitHub" />
                <ModeToggle />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}

export default memo(Header)