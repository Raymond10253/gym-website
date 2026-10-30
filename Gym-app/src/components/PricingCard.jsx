import React from "react";

export default function PricingCard({ title, price, benefits}) {
    <div className="bg-slate-900 border border-slate-800 p-8 rounded-2xl text-center shadow-lg hover:border-amber-500 transition">
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-4xl font-extrabold text-amber-500 mb-6">{price}</p>
        <ul>
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center">
                    <span className="text-ember-500 mr-2">
                        <i className="fa-solid fa-check"></i>
                    </span>{benefit}
                </li> 
            ))}
            
        </ul>
        <button className="p-3 rounded-xl bg-amber-500 uppercase w-full">
            join now
        </button>
    </div>
}