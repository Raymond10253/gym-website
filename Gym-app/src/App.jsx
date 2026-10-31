import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PricingCard from './components/PricingCard'

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

        <section id='pricing' className='py-20 px-4 max-w-7xl mx-auto'>
          <h2 className='text-3xl font-bold text-center my-4'>Membership plans</h2>
          <div className='max-w-xs mx-auto py-1 rounded-full bg-amber-500 mb-10'></div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {plans.map((plan, index) => (
              <PricingCard key={index} title={plan.title} price={plan.price} benefits={plan.benefits} />
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

