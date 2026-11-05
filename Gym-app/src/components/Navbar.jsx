import React, { useState } from 'react';
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('home');

    return (
        <nav className='bg-slate-900/30 text-white shadow-md sticky top-0 z-50 py-7 backdrop-blur-md'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    <div className='w-1/3 title'>
                        <span className='font-bold text-2xl text-amber-500'>FITNESS CLUB</span>
                    </div>
                    <div className='space-x-8 text-md hidden md:flex w-2/3 flex items-center justify-center uppercase'>
                        <a 
                        href="#home" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'home' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('home')}
                        >
                            Home
                        </a>
                        <a 
                        href="#programs" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'programs' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('programs')}
                        >
                            Programs
                        </a>
                        <a 
                        href="#trainers" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'trainers' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('trainers')}
                        >
                            Trainers
                        </a>
                        <a 
                        href="#membership" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'membership' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('membership')}
                        >
                            Membership & Pricing
                        </a>
                        <a 
                        href="#booking" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'booking' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('booking')}
                        >
                            Book
                        </a>
                        <a 
                        href="#contact" 
                        className={`hover:text-amber-400 transition duration-500 hover:scale-110 ${activeTab === 'contact' ? 'text-amber-500' : 'text-white'}`}
                        onClick={() => setActiveTab('contact')}
                        >
                            Contact
                        </a>
                        <a 
                        href="/admin" 
                        className='hover:text-amber-600 transition duration-500 hover:scale-110 uppercase font-bold text-amber-400'
                        >
                            Admin
                        </a>
                    </div>
                    <div className='md:hidden'>
                        <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className='text-2xl hover:text-slate-400 transition duration-500 hover:scale-110'>
                            <i className='fa-solid fa-bars'></i>
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-3'>
                    <a 
                    href="#home" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'home' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('home')}
                    >
                        Home
                    </a>
                    <a 
                    href="#programs" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'programs' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('programs')}
                    >
                        Programs
                    </a>
                    <a 
                    href="#trainers" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'trainers' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('trainers')}
                    >
                        Trainers
                    </a>
                    <a 
                    href="#membership" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'membership' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('membership')}
                    >
                        Membership & Pricing
                    </a>
                    <a 
                    href="#booking" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'booking' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('booking')}
                    >
                        Book
                    </a>
                    <a 
                    href="#contact" 
                    className={`block hover:text-amber-400 transition-all duration-500 flex justify-end ${activeTab === 'contact' ? 'text-amber-500' : 'text-white'}`}
                    onClick={() => setActiveTab('contact')}
                    >
                        Contact
                    </a>
                    <a 
                    href="/admin" 
                    className='block hover:text-amber-600 transition-all duration-500 font-bold uppercase text-amber-400 flex justify-end'
                    >
                        Admin
                    </a>
                </div>
            )}
        </nav>
    )
}