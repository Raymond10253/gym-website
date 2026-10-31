import React from "react";

export default function Hero() {
    return(
        <>
            <section id="home" className="py-20 px-4 md:px-6">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-3xl font-extrabold uppercase text-amber-500">Welcome To Fitness Club</span>
                    <h1 className="text-xl font-semibold">Transform your Body Today</h1>
                    <p className="text-md text-slate-400">Push your limit with state-of-the-artequipment, expert trainers, and a community dedicated to your success.</p>
                    <div>
                        <a href="#pricing"
                        className="p-3 rounded-xl uppercase bg-amber-400"
                        >Join Now</a>
                    </div>
                </div>
            </section>
        </>
    )
}