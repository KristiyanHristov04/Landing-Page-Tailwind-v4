import DonateButton from "./components/donate-button/DonateButton"
import Donate from "./components/donate/Donate"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"
import OurImpact from "./components/our-impact/OurImpact"
import OurMission from "./components/our-mission/OurMission"
import StayConnected from "./components/stay-connected/StayConnected"
import RecentProjects from "./recent-projects/RecentProjects"
import Footer from "./components/footer/Footer"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const App = () => {

    useEffect(() => {
        Aos.init({
            once: true,
        });
    }, []);

    return (
        <>
            <Header />
            <HeroSection />
            <OurMission />
            <OurImpact />
            <RecentProjects />
            <DonateButton />
            <Donate />
            <StayConnected />
            <Footer />
        </>
    )
}

export default App
