import { FaLinkedin, FaLocationPin, FaSquareXTwitter } from "react-icons/fa6";
import logo from "../../assets/more/logo1.png";
import { FaFacebookSquare, FaInstagramSquare, FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <div className="bg-footer-img pt-20">
        <div className="container mx-auto px-10">
          <img className="w-16" src={logo} alt="" />
          <div className="grid md:grid-cols-2 gap-10 bg-footer-img pb-10">
            <div className="space-y-6">
              <h2
                style={{ textShadow: "0px 1px 8px #818181" }}
                className="font-rancho text-secondary font-extrabold text-3xl"
              >
                Espresso Emporium
              </h2>
              <p className="font-raleway">
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex gap-2">
                <FaFacebookSquare className="text-5xl text-secondary cursor-pointer" />
                <FaSquareXTwitter className="text-5xl text-secondary cursor-pointer" />
                <FaInstagramSquare className="text-5xl text-secondary cursor-pointer" />
                <FaLinkedin className="text-5xl text-secondary cursor-pointer" />
              </div>
              <h2
                style={{ textShadow: "0px 1px 8px #818181" }}
                className="font-rancho text-secondary font-extrabold text-3xl"
              >
                Get in Touch
              </h2>
              <div className="space-y-2 font-raleway">
                <div className="flex gap-3 items-center">
                  <FaPhone />
                  +88 01533 333 33
                </div>
                <div className="flex gap-3 items-center">
                  <IoMdMail />
                  info@gmail.com
                </div>
                <div className="flex gap-3 items-center">
                  <FaLocationPin />
                  72, Wall street, King Road, Dhaka
                </div>
              </div>
            </div>

            <div>
              <h2
                style={{ textShadow: "0px 1px 8px #818181" }}
                className="font-rancho text-secondary font-extrabold text-3xl mb-4"
              >
                Contact With Us
              </h2>
              <form className=" font-raleway space-y-3">
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="input "
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input "
                    required
                  />
                </div>
                <div className="form-control">
                  <textarea
                    placeholder="Message"
                    className="textarea textarea-lg w-full p-2 text-base h-36"
                  ></textarea>
                </div>
              </form>
              <button className="btn btn-outline border-2 font-rancho rounded-full tracking-wider text-xl mt-4">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="font-rancho bg-footer-copyright-img">
        <p className="text-center text-white text-base md:text-2xl p-8 tracking-wide">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
