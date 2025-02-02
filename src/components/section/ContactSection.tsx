import React from 'react'

export const ContactSection = () => {
    return (
        <>
            <section className="p-4 mt-14 bg-primary-400 rounded-2xl">
                <div className="p-28 flex items-center justify-center gap-8">
                    <div className="w-9/12">
                        <h2 className="text-5xl font-medium text-white">Can’t find the answers
                            you need?</h2>
                        <p className="text-2xl mt-6 font-light opacity-50">We’re here to support you! Contact us today and let’s make a difference together."</p>
                    </div>
                    <div className="3/12">
                        <button className="py-4 px-10 rounded-full bg-white text-primary-400 font-light">Contact Us</button>
                    </div>
                </div>
            </section>
        </>
    )
}
