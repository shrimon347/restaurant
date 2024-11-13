import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaRegClock,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import footer from "../../assets/footer.webp"
const Footer = () => {
  return (
    <div
      className="bg-cover bg-center text-white"
      style={{
        backgroundImage: `url(${footer})`,
      }}
    >
      <div className="bg-black bg-opacity-70 py-[160px]  px-4">
        <h2 className="text-center text-2xl md:text-4xl font-bold mb-8">
          WE'RE READY TO HAVE YOU THE BEST DINING EXPERIENCES
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <FaRegClock className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="font-semibold">OPENING HOURS</h3>
            <p>Monday - Sunday</p>
            <p>9:00 AM to 11:30 PM</p>
          </div>

          <div>
            <MdOutlinePhoneInTalk className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="font-semibold">LET'S TALK</h3>
            <p>Phone: 1-800-222-4545</p>
            <p>Fax: 1-800-222-4545</p>
          </div>

          <div>
            <FiMail className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="font-semibold">BOOK A TABLE</h3>
            <p>Email: demo@website.com</p>
            <p>Support: support@website.com</p>
          </div>

          <div>
            <GrLocation className="h-8 w-8 mx-auto text-yellow-500 mb-2" />
            <h3 className="font-semibold">OUR ADDRESS</h3>
            <p>123 Street New York City</p>
            <p>United States of America</p>
          </div>
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center space-x-6 mb-6">
            <div className="rounded-full bg-black border border-white p-2">
              <FaFacebook className="text-white hover:text-yellow-400 h-6 w-6 cursor-pointer " />
            </div>
            <div className="rounded-full bg-black border border-white p-2">
              <FaSquareXTwitter className="text-white hover:text-yellow-400 h-6 w-6 cursor-pointer" />
            </div>
            <div className="rounded-full bg-black border border-white p-2">
              <FaInstagramSquare className="text-white hover:text-yellow-400 h-6 w-6 cursor-pointer" />
            </div>
            <div className="rounded-full bg-black border border-white p-2">
              <FaLinkedin className="text-white hover:text-yellow-400 h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <p className="text-sm">&copy; 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
