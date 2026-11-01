import React, { useState } from "react"
import { saveContact } from "../services/submissionStorage";
import axios from "axios";

const data = {
    name: '',
    email: '',
    PHONE: '',
    message: ''
};


export default function Contact() {

    const [contactData, setContactData] = useState(data);
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [submitError, setSubmitError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true);

        try {
            await axios.post('/api/contacts', contactData);
            saveContact(contactData);
            setSubmitted(true);
            setSubmitError("");
        } catch (error) {
            setLoading(false);
            setSubmitError(error instanceof Error ? error.message : "Unable to save your message.");
        }
    }

    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setContactData((prev) => ({...prev, [name]: value }))
    }
    return(
        <>
        <section id="contact" className="py-24 px-4 max-w-3xl mx-auto">
            <div className="p-4 bg-slate-900 rounded-3xl border border-slate-800 p-8 sm:p-12 shadow-2xl">

                {submitError && (
                    <div className="mb-6 bg-red-950/50 border border-red-500/50 text-red-300 p-4 rounded-xl text-sm text-center">
                        {submitError}
                    </div>
                )}
                {submitted ? (
                    <div>
                        <h3 className="text-md text-green p-3 rounded-xl bg-green/50">Your message about {contactData.subject} has reached us. Kindky wait for a moment we will get back at you.</h3>
                    </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {submitError && <p role="alert" className="text-sm text-red-400">{submitError}</p>}
                    <div>
                        <label htmlFor="subject" className="block my-2 font-bold">SUBJECT</label>
                        <input 
                        type="text"
                        name="subject"
                        placeholder="Enter subject of matter"
                        required
                        value={contactData.subject}
                        onChange={handleChange}
                        className="w-full p-2 rounded-xl text-black"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block my-2 font-bold">MESSAGE</label>
                        <textarea 
                        name="message"
                        placeholder="message..."
                        required
                        value={contactData.message}
                        onChange={handleChange}
                        className="w-full p-2 h-[200px] rounded-xl text-black"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-4 py-3 rounded-xl bg-amber-500 font-semibold text-slate-950 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-amber-400 transition hover:text-white hover:scale-105"
                    >
                        {loading ? "SUBMITTING..." : "SUBMIT"}
                    </button>
                </form>  
                ) }
                
            </div>
        </section>
            
        </>
    )
}