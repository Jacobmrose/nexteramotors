'use client'
import { useState } from 'react'
import Image from 'next/image'
import { navLinks } from '../constants'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <header className='fixed top-0 right-0 left-0 z-50 bg-gray-700 transition-all duration-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center min-h-12'>
        <nav className='hidden lg:flex'>
          <NavItems />
        </nav>

        {/* Mobile Menu Button - Positioned at the top right */}
        <button
          onClick={toggleMenu}
          className='text-gray-300 hover:text-gray-100 focus:outline-none lg:hidden absolute right-4 top-3' // Positioning changes here
          aria-label='Toggle menu'
        >
          <Image
            src={isOpen ? '/assets/close.svg' : '/assets/menu.svg'}
            alt='toggle'
            width={28}
            height={28}
          />
        </button>
      </div>

      {/* Mobile Menu (Dropdown with Close Icon) */}
      {isOpen && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-700 backdrop-blur-lg p-6 lg:hidden flex flex-col items-center space-y-4 z-50'>
          <button
            onClick={toggleMenu}
            className='self-end text-gray-300 hover:text-gray-100'
            aria-label='Close menu'
          >
            <Image src='/assets/close.svg' alt='close' width={28} height={28} />
          </button>
          <NavItems isMobile />
        </div>
      )}
    </header>
  )
}

const NavItems = ({ isMobile }: { isMobile?: boolean }) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const toggleDropdown = (id: number | string) => {
    setOpenDropdown((prev) => (prev === String(id) ? null : String(id)))
  }

  return (
    <ul
      className={`flex ${
        isMobile ? 'flex-col space-y-5' : 'gap-8 text-sm lg:text-base'
      }`}
    >
      {navLinks.map(({ id, href, name, dropdown, subItems }) => (
        <li key={id} className='relative group'>
          <div className='flex items-center gap-2'>
            <a
              href={href}
              className='text-gray-300 hover:text-gray-100 transition duration-300 font-medium tracking-wide'
            >
              {name}
            </a>
            {dropdown && (
              <button
                onClick={() => toggleDropdown(String(id))}
                className='text-gray-300 hover:text-gray-100 transition duration-300'
                aria-label='Toggle dropdown'
              >
                ▼
              </button>
            )}
          </div>

          {/* Desktop Dropdown (Hover) */}
          {!isMobile && dropdown && subItems && (
            <ul className='absolute left-1/2 -translate-x-1/2 top-full w-48 bg-gray-600 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
              {subItems.map((sub) => (
                <li
                  key={sub.id}
                  className='px-4 py-2 hover:bg-gray-500 transition'
                >
                  <a
                    href={sub.href}
                    className='block text-gray-300 hover:text-gray-100'
                  >
                    {sub.name}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Mobile Dropdown (Click) */}
          {isMobile && dropdown && subItems && openDropdown === String(id) && (
            <ul className='mt-3 bg-gray-600 rounded-md shadow-lg'>
              {subItems.map((sub) => (
                <li
                  key={sub.id}
                  className='px-4 py-3 border-b border-gray-00 hover:bg-gray-500 transition'
                >
                  <a
                    href={sub.href}
                    className='block text-gray-300 hover:text-gray-100'
                  >
                    {sub.name}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navbar
