const HeroSection = () => {
    return (
        <section className="h-screen w-full bg-[url('/images/ocean.jpeg')] bg-no-repeat bg-cover bg-center" id="home">
            <div className="absolute inset-0 bg-primary-dark/70 z-10"></div>
            <div className="text-white text-center relative z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[800px] p-6" data-aos="fade-up" data-aos-duration="1000">
                <h1 className="text-[4rem] mb-4 font-montserrat font-bold" data-aos="fade-up" data-aos-duration="1000">Save Our Oceans</h1>
                <p className="text-[1.25rem] mb-4" data-aos="fade-up" data-aos-duration="1000">Join us in the fight against ocean pollution and help restore our planet's most precious resource.</p>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <a href="#donate" className="relative bg-primary hover:bg-primary-dark hover:-translate-y-1.5 transition-all duration-300 px-6 py-4 font-bold rounded-[8px] font-montserrat">Donate Now</a>
                    <a href="#about" className="relative bg-secondary hover:bg-secondary-dark hover:-translate-y-1.5 transition-all duration-300 px-6 py-4 font-bold rounded-[8px] font-montserrat">Learn More</a>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;