import React, { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className='bg-slate-900 text-white shadow-md sticky top-0 z-50 py-7'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3'>
                        <span className='font-bold text-2xl text-amber-500'>FITNESS CLUB</span>
                    </div>
                    <div className='space-x-8 text-md hidden md:flex w-2/3 flex items-center justify-center'>
                        <a href="#home" className='hover:text-amber-400 transition-all duration-500'>Home</a>
                        <a href="#programs" className='hover:text-amber-400 transition-all duration-500'>Programs</a>
                        <a href="#trainers" className='hover:text-amber-400 transition-all duration-500'>Trainers</a>
                        <a href="#membership" className='hover:text-amber-400 transition-all duration-500'>Membership</a>
                        <a href="#contact" className='hover:text-amber-400 transition-all duration-500'>Contact</a>
                    </div>
                    <div className='md:hidden'>
                        <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-2xl hover:text-slate-400 transition-all duration-500'>
                            <i className='fa-solid fa-bars'></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2'>
                    <a href="#home" className='block hover:text-amber-400 transition-all duration-500'>Home</a>
                    <a href="#programs" className='block hover:text-amber-400 transition-all duration-500'>Programs</a>
                    <a href="#trainers" className='block hover:text-amber-400 transition-all duration-500'>Trainers</a>
                    <a href="#membership" className='block hover:text-amber-400 transition-all duration-500'>Membership</a>
                    <a href="#contact" className='block hover:text-amber-400 transition-all duration-500'>Contact</a>
                </div>
            )}
        </nav>
    )
}