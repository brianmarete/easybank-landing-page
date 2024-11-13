import InviteButton from "./Invite-Button";
import HeroImg from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="h-[75vh] bg-very-light-gray flex flex-col md:flex-row mt-20">
      <div className="flex-1 order-2 md:order-1 flex justify-end align-middle">
        <div className="flex flex-col items-start justify-center gap-5 max-w-md lg:mr-36">
          <h1 className="text-5xl font-light">
            Next generation digital banking
          </h1>
          <p className="text-grayish-blue text-lg">
            Take your financial life online. Your Easybank account will be
            on-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <InviteButton />
        </div>
      </div>
      <div className="flex-1 order-1 md:order-2 h-full relative overflow-x-clip bg-hero-mobile md:bg-hero-desktop bg-cover">
        <img
          src={HeroImg}
          alt=""
          className="absolute -top-10 lg:translate-x-32 lg:-translate-y-20 -translate-y-40 "
        />
      </div>
    </section>
  );
};

export default Hero;
