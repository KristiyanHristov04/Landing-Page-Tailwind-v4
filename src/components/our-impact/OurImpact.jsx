import { FaEarthAmericas, FaHandshakeAngle, FaTrashCan, FaWater } from "react-icons/fa6";
import ImpactCard from "./impact-card/ImpactCard";

const OurImpact = () => {
    return (
        <section className="p-20 bg-gray-100" id="impact">
            <h3 className="text-center text-[40px] font-montserrat font-bold mb-2">Our Impact</h3>
            <div className="w-16 h-1 rounded-full bg-secondary mx-auto mb-12"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                <ImpactCard
                    heading="5,000,000"
                    description="Tons of plastic removed"
                    icon={<FaTrashCan size={42} className="text-primary" />}
                />
                <ImpactCard
                    heading="1,200"
                    description="Cleanup operations"
                    icon={<FaWater size={42} className="text-primary" />}
                />
                <ImpactCard
                    heading="25,000"
                    description="Volunteers worldwide"
                    icon={<FaHandshakeAngle size={42} className="text-primary" />}
                />
                <ImpactCard
                    heading="15+"
                    description="Countries involved"
                    icon={<FaEarthAmericas size={42} className="text-primary" />}
                />
            </div>
        </section>
    )
}

export default OurImpact;