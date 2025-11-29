import footerlogo from '../../assets/logo.svg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function Footerone () {
    return (
        <div className="w-full md:w-80 h-full">
            <img className='w-80 p-10' src={''} alt="Footerlogo" />
            <p className='px-10'>
                Strategic business development <br/>
                solutions to help your company <br/>
                expand, scale, and dominate your market.
            </p>
            <div className='flex justify-center '>
                <a href="">
                <p className='p-5 text-2xl'>
                    <FaInstagram />
                </p>
            </a>
            <a href="">
                <p className='p-5 text-2xl'>
                    <FaLinkedin />
                </p>
            </a>
            <a href="">
                <p className='p-5 text-2xl'>
                    <FaTwitter />
                </p>
            </a>
            <a href="">
                <p className='p-5 text-2xl'>
                    <FaFacebookF />
                </p>
            </a>
            </div>
        </div>
    );
}