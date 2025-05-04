import { useState } from "react";

import { FaLock } from "react-icons/fa6";
import { FiDollarSign } from "react-icons/fi";

const Donate = () => {
    console.log("Donate component rendered");
    const [subscriptionType, setSubscriptionType] = useState("one-time");
    const [donationButtonId, setDonationButtonId] = useState(1);
    const donationAmounts = [
        {
            id: 1,
            amount: '$25'
        },
        {
            id: 2,
            amount: '$50'
        },
        {
            id: 3,
            amount: '$100'
        },
        {
            id: 4,
            amount: '$250'
        },
        {
            id: 5,
            amount: "Custom"
        }
    ];

    return (
        <section className="p-20 bg-gray-100" id="donate">
            <div className="flex flex-col md:flex-row gap-14 items-center">
                <div className="basis-1/2" data-aos="fade-right" data-aos-duration="1000">
                    <h2 className="text-[1.5rem] md:text-[40px] text-primary mb-8 font-montserrat font-bold">Make a Difference Today</h2>
                    <p className="mb-6">Your contribution helps us deploy cleanup technologies, support research, and engage communities in protecting our oceans.</p>
                    <p className="mb-6">Every dollar counts in our mission to restore the health of marine ecosystems worldwide.</p>
                </div>
                <div className="basis-1/2 shadow-xl rounded-[8px] p-8 bg-white" data-aos="fade-left" data-aos-duration="1000" data-aos-offset="100">
                    <h3 className="text-[28px] font-bold text-primary text-center mb-6">Donate to OceanPure</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        {donationAmounts.map((donation) =>
                            <button key={donation.id} onClick={() => setDonationButtonId(donation.id)} className={`${donation.id === donationButtonId ? "bg-primary-light border-primary-light text-white" : "bg-gray-100 text-black border-gray-300 hover:text-white"} font-montserrat  rounded-[4px] border-2 px-4 py-2 cursor-pointer  hover:bg-primary-light hover:border-primary-light transition-all duration-300`}>{donation.amount}</button>
                        )}
                    </div>
                    <div className="flex flex-col mb-6 gap-1.5">
                        {donationButtonId === 5 &&
                            <>
                                <label>Enter amount:</label>
                                <div className="relative">
                                    <span className="absolute top-1/2 -translate-y-1/2 p-4 pr-0 text-gray-500"><FiDollarSign /></span>
                                    <input placeholder="Amount" type="number" className="w-full p-4 pl-9 pb-[17px] border-[1px] border-gray-300 focus:border-primary rounded-[8px] focus:outline-primary transition-all duration-300 input-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 " />
                                </div>
                            </>
                        }
                    </div>
                    <div className="flex mb-6">
                        <button className={`${subscriptionType === "one-time" ? "bg-primary-light text-white border-primary-light" : "bg-white border-gray-300 text-black border-r-0 rounded-tr-none rounded-br-none"} px-4 py-2 m-0  basis-1/2 border-2  rounded-tr-none rounded-br-none rounded-[4px] cursor-pointer`} onClick={() => setSubscriptionType("one-time")}>One-Time</button>
                        <button className={`${subscriptionType === "monthly" ? "bg-primary-light text-white border-primary-light" : "bg-white border-gray-300 text-black"} basis-1/2 px-4 py-2 m-0 border-2 border-gray-300 rounded-[4px] cursor-pointer border-l-0 rounded-tl-none rounded-bl-none`} onClick={() => setSubscriptionType("monthly")}>Monthly</button>
                    </div>
                    <button className="bg-primary hover:bg-primary-dark text-white w-full text-center font-bold font-montserrat rounded-[8px] px-6 py-4 leading-4 cursor-pointer hover:-translate-y-1 transition-all duration-300">Donate Now</button>
                    <div className="mt-4 flex gap-0.5 text-[14px] justify-center items-center text-gray-500 text-sm">
                        <FaLock />
                        Secure donation
                    </div>
                </div>
            </div>
        </section>
    )

}

export default Donate;