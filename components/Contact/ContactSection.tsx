"use client";

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'


const ContactSection = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        const data = await res.json();
        setLoading(false);

        if (data.success) {
            setSuccess("Your message has been sent!");
            setForm({ name: "", email: "", phone: "", message: "" });
        } else {
            setSuccess("Something went wrong.");
        }
    };
   
    return (
        <main>
           
            <section className='py-16'>
                <div className='container mx-auto md:px-0 px-4 flex md:flex-row flex-col md:gap-16 gap-6 items-center'>
                    <div className=" w-full bg-[#EAF4FC] py-16 px-10">
                        <h2 className='md:text-[38px] md:leading-none text-2xl font-semibold font-playfair text-title mb-5'>
                           Book a Demo or Get In Touch
                        </h2>
                        <p className='text-lg font-normal text-desc mb-5'>
                      We’ll plug into a safe subset of your data and walk you through KPIs, insights, and actions live.  </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Name *"
                                    className="border border-black/30 rounded-md p-3 w-full outline-none"
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="Email *"
                                    className="border border-black/30 rounded-md p-3 w-full outline-none"
                                />
                            </div>

                            {/* Phone */}
                            <input
                                name="phone"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                placeholder="Phone *"
                                className="border border-black/30 rounded-md p-3 w-full outline-none"
                            />

                            {/* Message */}
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                placeholder="Your Message *"
                                rows={5}
                                className="border border-black/30 rounded-md p-3 w-full outline-none"
                            ></textarea>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="cursor-pointer brand-gradient text-white font-semibold rounded-xl px-5 py-2 inline-flex items-center gap-2"
                            >
                                {loading ? "Sending..." : "SUBMIT"}
                            </button>

                            {success && <p className="text-sm mt-2 text-green-600">{success}</p>}
                        </form>
                    </div>
                   
                </div>
            </section>
        </main>
    )
}

export default ContactSection