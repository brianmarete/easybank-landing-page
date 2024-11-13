import OnlineIcon from "../assets/icon-online.svg";
import BudgetIcon from "../assets/icon-budgeting.svg";
import OnboardingIcon from "../assets/icon-onboarding.svg";
import ApiIcon from "../assets/icon-api.svg";

const About = () => {
  return (
    <section className="bg-light-grayish-blue py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center md:text-left font-light mb-8">
          Why choose Easybank?
        </h2>
        <p className="mb-8 mx-8 md:mx-0 font-light text-sm md:text-base text-grayish-blue text-center md:text-left">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-10 ">
          <div className="space-y-8">
            <img src={OnlineIcon} alt="" className="mx-auto lg:mx-0" />
            <h3 className="text-xl md:text-2xl text-center lg:text-left font-light">
              Online Banking
            </h3>
            <p className="text-sm md:text-base mx-8 md:mx-0 font-light text-grayish-blue text-center lg:text-left">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="space-y-8">
            <img src={BudgetIcon} alt="" className="mx-auto lg:mx-0" />
            <h3 className="text-xl md:text-2xl text-center lg:text-left font-light">
              Simple Budgeting
            </h3>
            <p className="text-sm md:text-base mx-8 md:mx-0 font-light text-grayish-blue text-center lg:text-left">
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="space-y-8">
            <img src={OnboardingIcon} alt="" className="mx-auto lg:mx-0" />
            <h3 className="text-xl md:text-2xl text-center lg:text-left font-light">
              Fast Onboarding
            </h3>
            <p className="text-sm md:text-base mx-8 md:mx-0 font-light text-grayish-blue text-center lg:text-left">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="space-y-8">
            <img src={ApiIcon} alt="" className="mx-auto lg:mx-0" />
            <h3 className="text-xl md:text-2xl text-center lg:text-left font-light">
              Open API
            </h3>
            <p className="text-sm md:text-base mx-8 md:mx-0 font-light text-grayish-blue text-center lg:text-left">
              Manage your savings, investments, pension, and much more from one
              account. Tracking your money has never been easier.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
