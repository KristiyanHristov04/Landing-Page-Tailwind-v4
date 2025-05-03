import { BiSolidDonateHeart } from "react-icons/bi";

const DonateButton = () => {
    return (
        <a href="#donate" className="text-white bg-orange hover:bg-orange-dark hover:-translate-y-1.5 transition-all duration-300 ease py-2 px-4 fixed bottom-8 right-8 z-20 flex items-center gap-2 rounded-full"><BiSolidDonateHeart size={24} /> Donate</a>
    )
}

export default DonateButton;