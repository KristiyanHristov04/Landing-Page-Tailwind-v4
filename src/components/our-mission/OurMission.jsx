const OurMission = () => {
    return (
        <section className="p-20" id="about">
            <h3 className="text-center text-[40px] font-montserrat font-bold mb-2">Our Mission</h3>
            <div className="w-16 h-1 rounded-full bg-secondary mx-auto mb-12"></div>
            <div className="flex flex-col md:flex-row gap-10 justify-center items-center w-[80%] mx-auto">
                <div className="basis-1/2 shadow-2xl rounded-[8px] overflow-hidden" data-aos="fade-right" data-aos-duration="1000" data-aos-offset="300">
                    <img src="/images/ocean2.jpeg" className="w-full h-full object-cover" />
                </div>
                <div className="basis-1/2" data-aos="fade-left" data-aos-duration="1000">
                    <h3 className="mb-6 font-montserrat text-[28px] text-primary font-bold">Cleaning Oceans, Saving Lives</h3>
                    <p className="mb-6">At OceanPure Foundation, we're dedicated to removing plastic and other pollutants from our oceans through innovative cleanup technologies and community-driven initiatives.</p>
                    <p className="mb-6">Founded in 2020, our organization has grown into a global movement with operations in 15 countries across 4 continents.</p>
                    <p className="mb-6">We believe that clean oceans are essential for a healthy planet, and we're committed to restoring marine ecosystems for future generations.</p>
                </div>
            </div>
        </section>
    )
}

export default OurMission;