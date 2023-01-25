import FacebookIcon from "../../assets/facebook.png"
import HouseIcon from "../../assets/house.png"
import InstagramIcon from "../../assets/instagram.png"
import TwitterIcon from "../../assets/twitter.png"
import WhatsappLogo from "../../assets/whatsapp.png"

export const Footer = () => {
  return (
    <footer className="mt-52 px-20 sm:px-10 md:px-20 lg:px-36 xl:px-56 2xl:px-72 py-12 sm:py-20 flex flex-wrap justify-between bg-orange-400 text-white gap-y-12 sm:gap-y-20 flex-col text-center sm:text-left sm:flex-row">
      <div className="m-auto sm:m-0">
        <img src={HouseIcon} alt="" className="w-auto h-[88px] m-auto sm:m-0" />
        <p className="w-[250px] my-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page whenters.
        </p>
        <div className="mt-4 sm:mt-10 flex gap-3 sm:justify-start justify-center">
          <div className="p-2 border-2 border-white rounded-full">
            <img src={TwitterIcon} alt="" />
          </div>
          <div className="p-2 border-2 border-white rounded-full">
            <img src={FacebookIcon} alt="" />
          </div>
          <div className="p-2 border-2 border-white rounded-full">
            <img src={InstagramIcon} alt="" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl">About Us</h3>
        <div className="mt-3 sm:mt-20 flex flex-col gap-1 sm:gap-6">
          <a className="hover:underline" href="/">
            About
          </a>
          <a className="hover:underline" href="/">
            Privacy & Policy
          </a>
          <a className="hover:underline" href="/">
            Terms & Conditions
          </a>
          <a className="hover:underline" href="/">
            Faq
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl">Navigate</h3>
        <div className="mt-3 sm:mt-20 flex flex-col gap-1 sm:gap-6">
          <a className="hover:underline" href="/">
            How We Work
          </a>
          <a className="hover:underline" href="/">
            Services
          </a>
          <a className="hover:underline" href="/">
            Faq
          </a>
          <a className="hover:underline" href="/">
            Contact
          </a>
          <a className="hover:underline" href="/">
            Free quote
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-xl">Contact Us</h3>
        <div className="mt-3 sm:mt-20 flex flex-col gap-1 sm:gap-6">
          <p>Ricardo Margain 444</p>
          <p>Call: +52 81 1234 5678</p>
          <p>Email: info@challenge.com</p>
          <div className="mt-4 m-auto sm:m-0">
            <img src={WhatsappLogo} alt="" />
          </div>
        </div>
      </div>
    </footer>
  )
}
