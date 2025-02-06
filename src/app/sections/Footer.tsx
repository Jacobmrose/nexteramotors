'use client'
import { useEffect, useState } from 'react'

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const currentYear = new Date().getFullYear()
    if (year !== currentYear) {
      setYear(currentYear)
    }
  }, [year])

  return (
    <footer className='c-space pb-5 pt-5 w-full bg-gray-700 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-5 font-bold'>
      <div className='flex flex-col items-center sm:items-start'>
        <p className='text-gray-300 text-center sm:text-left xl:ml-64'>
          Next Era Motors
        </p>
        <p className='text-gray-300 text-sm text-center sm:text-left xl:ml-64'>
          Innovating the future of mobility
        </p>
      </div>

      <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
        <p className='text-gray-300 text-sm'>© {year} | All rights reserved.</p>
        <div className='text-gray-300 text-sm'>
          <p>Contact Us: info@next-era-motors.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
      </div>

      <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
        <p className='text-sm'>Follow Us:</p>
        <div className='flex gap-3 justify-center sm:justify-start'>
          <a href='#' className='text-blue-400'>
            Facebook
          </a>
          <a href='#' className='text-blue-400'>
            Twitter
          </a>
          <a href='#' className='text-blue-400'>
            Instagram
          </a>
          <a href='#' className='text-blue-400'>
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
