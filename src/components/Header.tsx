'use client'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-[#043873] py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Image
        src={"/Logo.png"}
        alt='logo'
        width={191}
        height={34}
        />
        <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:flex absolute md:relative top-16 left-0 right-0 bg-[#043873] md:bg-transparent z-50 md:top-0`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0">
            <li><Link href="#" className="text-white hover:text-blue-200">Products</Link></li>
            <li><Link href="#" className="text-white hover:text-blue-200">Solutions</Link></li>
            <li><Link href="#" className="text-white hover:text-blue-200">Resources</Link></li>
            <li><Link href="#" className="text-white hover:text-blue-200">Pricing</Link></li>
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" className="bg-[#FFE492] text-[#043873] hidden md:inline-flex">Login</Button>
          <Button className="bg-[#4F9CF9] text-white hover:bg-[#FFD460] hidden md:inline-flex">Try Whitepace free 
            <Image
                   src="/arrow.png"
                   alt="Arrow"
                   width={15}
                   height={15}
                  />  
          </Button>
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
    )
}