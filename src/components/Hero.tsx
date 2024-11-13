import InviteButton from "./Invite-Button";
import HeroImg from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="h-[75vh] bg-very-light-gray flex flex-col md:flex-row mt-20">
      <div className="flex-1 order-2 md:order-1 flex md:justify-end align-middle md:pl-4">
        <div className="flex flex-col items-center md:items-start justify-center gap-5 max-w-md lg:mr-36 px-4 md:px-0">
          <h1 className="text-4xl md:text-5xl text-center md:text-left font-light">
            Next generation digital banking
          </h1>
          <p className="text-grayish-blue text-md md:text-lg text-center md:text-left">
            Take your financial life online. Your Easybank account will be
            on-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <InviteButton />
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2 relative h-full overflow-x-clip bg-hero-mobile md:bg-hero-desktop bg-cover">
        <img
          src={HeroImg}
          alt=""
          className="absolute -top-10 lg:translate-x-32 lg:-translate-y-20 md:-translate-y-16 -translate-y-40 "
        />
      </div>
    </section>
  );
};

export default Hero;
