import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="p-20 bg-gray">
            <div className="flex flex-col md:flex-row gap-10 justify-center">
                <div>
                    <a href="/" className="inline-block text-2xl font-montserrat font-bold mb-4 text-white">OceanPure</a>
                    <p className="mb-6 text-white">Making our oceans clean again, one initiative at a time.</p>
                    <div className="flex gap-4">
                        <a href="/" className="w-9 h-9 bg-gray-700 rounded-[50%] flex justify-center items-center text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1.5"><FaFacebookF /></a>
                        <a href="/" className="w-9 h-9 bg-gray-700 rounded-[50%] flex justify-center items-center text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1.5"><FaXTwitter /></a>
                        <a href="/" className="w-9 h-9 bg-gray-700 rounded-[50%] flex justify-center items-center text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1.5"><FaInstagram /></a>
                        <a href="/" className="w-9 h-9 bg-gray-700 rounded-[50%] flex justify-center items-center text-white hover:bg-primary transition-all duration-300 hover:-translate-y-1.5"><FaLinkedinIn /></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-white text-[20px] mb-6 font-bold font-montserrat">Learn More</h3>
                    <ul className="text-gray-400 flex flex-col gap-2">
                        <li className="footer-link"><a href="/">About Us</a></li>
                        <li className="footer-link"><a href="/">Projects</a></li>
                        <li className="footer-link"><a href="/">Our Impact</a></li>
                        <li className="footer-link"><a href="/">News & Blog</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-[20px] mb-6 font-bold font-montserrat">Get Involved</h3>
                    <ul className="text-gray-400 flex flex-col gap-2">
                        <li className="footer-link"><a href="/">Donate</a></li>
                        <li className="footer-link"><a href="/">Volunteer</a></li>
                        <li className="footer-link"><a href="/">Partner With Us</a></li>
                        <li className="footer-link"><a href="/">Corporate Sponsorship</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white text-[20px] mb-6 font-bold font-montserrat">Contact</h3>
                    <ul className="text-gray-400 flex flex-col gap-2">
                        <li className="footer-link"><a href="/">Contact Us</a></li>
                        <li className="footer-link"><a href="/">Careers</a></li>
                        <li className="footer-link"><a href="/">Press Inquiries</a></li>
                        <li className="footer-link"><a href="/">FAQs</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;