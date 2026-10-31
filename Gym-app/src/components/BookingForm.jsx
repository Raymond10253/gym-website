import React, { useState } from "react";

const initialFormData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    goal: 'weight loss',
};

export default function BookingForm() {
    const [formData, setFormData] = useState(initialFormData);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            setSubmitted(true);
        }, 1000);
    };

    const resetBooking = () => {
        setSubmitted(false);
        setFormData(initialFormData);
    };

    return (
        <section id="booking" className="py-24 px-4 max-w-3xl mx-auto">
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                
                    
                {submitted ? (
                    <div>
                        <h2 className="text-amber-500 text-xl font-bold">You're booked!</h2>
                        <p className="text-slate-400 mt-2">
                            Thank you {formData.name}. We received your booking request for a trial session on {formData.date} at {formData.time}.
                            We will send a confirmation email shortly.
                        </p>
                        <button
                            type="button"
                            onClick={resetBooking}
                            className="py-2 bg-amber-500 px-4 mt-4 rounded-xl font-semibold text-slate-950 hover:bg-amber-400 transition"
                        >
                            BOOK ANOTHER SESSION
                        </button>
                    </div>
                ) : (
                <div>
                   <div>
                        <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
                            Risk-free Experience
                        </span>
                        <h2 className="text-3xl font-bold text-white mb-6">Book your free trial session</h2>
                        <p className="text-gray-400 mt-2">Pick a date and time that works for you, and let our expert trainers guide your first step</p>
                    </div>
                    <form onSubmit={handleSubmit} className="max-w-7xl mx-auto space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-slate-200 mb-2">Name</label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Full name..."
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-slate-200 mb-2">Email</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="johndoe@gmail.com"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-slate-200 mb-2">Phone number</label>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="Phone number"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="date" className="block text-slate-200 mb-2">Date</label>
                            <input
                                id="date"
                                type="date"
                                name="date"
                                required
                                value={formData.date}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="time" className="block text-slate-200 mb-2">Time</label>
                            <input
                                id="time"
                                type="time"
                                name="time"
                                required
                                value={formData.time}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            />
                        </div>

                        <div>
                            <label htmlFor="goal" className="block text-slate-200 mb-2">Primary goal</label>
                            <select
                                id="goal"
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full py-2 px-3 rounded-xl border border-slate-700 bg-slate-950 text-white"
                            >
                                <option value="weight loss">Weight loss</option>
                                <option value="muscle gain">Muscle gain</option>
                                <option value="general fitness">General fitness</option>
                                <option value="strength training">Strength training</option>
                            </select>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full mt-4 py-3 rounded-xl bg-amber-500 font-semibold text-slate-950 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-amber-400 transition hover:text-white hover:scale-105"
                        >
                            {loading ? "SUBMITTING..." : "SUBMIT"}
                        </button>
                    </form> 
                </div>
                    
                )}
                
            </div>
        </section>
    );
}