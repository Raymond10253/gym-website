import React from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BookingForm from './components/BookingForm'
import Programs from './pages/Programs'
import Membership from './components/Membership'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import './styles/App.css'


export default function App() {
  const plans = [
    {title: "Basic Plan", price: "$29", benefits: ["Gym Access", "Standard Equipment", "1 Free Trainer Session"]},
    {title: "Standard Plan", price: "$49", benefits: ["Full Gym Access", "All group classes", "Locker room", "3 Free trainer sessions"]},
    {title: "Premium Plan", price: "$79", benefits: ["24/7 VIP Access", "Unlimited Personal training", "Nuitrition Plan Included", "Guest pass Included"]}
  ];
  return (
    <>
      <div className='min-h-screen bg-slate-950 font-sans text-gray-100'>
        <Navbar />
        <Hero />
        <Programs />
        <Membership />
        <BookingForm />
        <Contact />
        <Footer />
      </div>
    </>
  )
}
