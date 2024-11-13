import LogoWhite from "../assets/logo-white.svg";
import FacebookIcon from "../assets/icon-facebook.svg";
import YoutubeIcon from "../assets/icon-youtube.svg";
import TwitterIcon from "../assets/icon-twitter.svg";
import PintrestIcon from "../assets/icon-pinterest.svg";
import InstagramIcon from "../assets/icon-instagram.svg";
import InviteButton from "./Invite-Button";

const Footer = () => {
  return (
    <footer className="bg-dark-blue py-8 text-sm">
      <div className="min-h-24 text-very-light-gray grid md:grid-cols-[repeat(3,_1fr)_auto] max-w-6xl m-auto">
        <div className="flex flex-col justify-between">
          <img src={LogoWhite} alt="" className="w-40" />
          <div className="flex justify-start gap-4">
            <a href="#">
              <img src={FacebookIcon} alt="" />
            </a>
            <a href="#">
              <img src={YoutubeIcon} alt="" />
            </a>
            <a href="#">
              <img src={TwitterIcon} alt="" />
            </a>
            <a href="#">
              <img src={PintrestIcon} alt="" />
            </a>
            <a href="#">
              <img src={InstagramIcon} alt="" />
            </a>
          </div>
        </div>
        <div>
          <ul className="space-y-4 text-light-grayish-blue">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="space-y-4 text-light-grayish-blue">
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between items-end">
          <InviteButton />
          <p className="text-sm text-gray-400">
            © Easybank. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
