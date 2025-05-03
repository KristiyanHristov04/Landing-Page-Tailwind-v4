const StayConnected = () => {
    return (
        <section className="p-20 bg-primary-dark">
            <h2 className="text-[40px] text-white text-center font-montserrat font-bold mb-8">Stay Connected</h2>
            <p className="text-center text-white mb-6">Join our newsletter to stay updated on our latest initiatives and impact.</p>
            <div className="text-white flex justify-center gap-3.5 w-[50%] mx-auto">
                <input type="text" placeholder="Your email address" className="p-4 rounded-[8px] bg-white text-black grow outline-0 input-shadow"  />
                <button className="bg-primary text-white px-6 py-4 font-bold font-montserrat cursor-pointer rounded-[8px] hover:bg-primary-light transition-all duration-300 ease hover:-translate-y-1.5">Subscribe</button>
            </div>
        </section>
    )
}

export default StayConnected;