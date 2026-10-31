import React, {useState} from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        goal: 'weight loss'
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        e.preventDefault({...formData, [e.target.name]: e.target.value});
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        setLoading(true)
    }
    setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
    }, 1000);
    return(
        <>
            <section id="booking" className="py-20 px-4 max-w-3xl mx-auto">
                <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
                    <div className="">
                        <span></span>
                        <h2></h2>
                        {submitted ? (
                            <div>
                                <h2 className="text-amber-500 text-xl font-bold">You're booked!</h2>
                                <p className="text-slate-400">Thank you {formData.name} we received your booking request for a trial session on {formData.date} at {formData.time}.
                                    We will send a comfirmation email shortly.
                                </p>
                                <button
                                onClick={() => setSubmitted(false)}
                                className="py-2 max-w-3xl bg-amber-500 px-3 mt-2 rounded-xl font-semibold"
                                >
                                    APPLY ANOTHER SESSION
                                </button>
                            </div>
                        ) : (
                            <form action="" onSubmit={handleSubmit} className="max-w-7xl mx-auto">
                                <div>
                                    <label htmlFor="" className="block">Name</label>
                                    <input 
                                    type="text"
                                    placeholder="Full name..."
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className="block">Email</label>
                                    <input 
                                    type="text"
                                    placeholder="..e.g johndoe@gmail.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className="block">Phone number</label>
                                    <input 
                                    type="tel"
                                    placeholder="phone number"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className="block">date</label>
                                    <input 
                                    type="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label htmlFor="" className="block">Time</label>
                                    <input 
                                    type="time"
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    />
                                </div>
                                <div>{formData.goal}</div>
                                <div></div>
                                    <button
                                    type="submit"
                                    className=""
                                    >
                                        SUBMIT
                                    </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}