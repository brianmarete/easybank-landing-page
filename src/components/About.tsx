import OnlineIcon from "../assets/icon-online.svg";
import BudgetIcon from "../assets/icon-budgeting.svg";
import OnboardingIcon from "../assets/icon-onboarding.svg";
import ApiIcon from "../assets/icon-api.svg";

const About = () => {
  return (
    <section className="bg-light-grayish-blue py-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-light mb-8">Why choose Easybank?</h2>
        <p className="mb-8 font-light text-grayish-blue">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="flex flex-col md:flex-row my-10 gap-14">
          <div className="space-y-8">
            <img src={OnlineIcon} alt="" />
            <h3 className="text-2xl font-light">Online Banking</h3>
            <p className="font-light text-grayish-blue">
              Our modern web and mobile applications allow you to keep track of
              your finances wherever you are in the world.
            </p>
          </div>
          <div className="space-y-8">
            <img src={BudgetIcon} alt="" />
            <h3 className="text-2xl font-light">Simple Budgeting</h3>
            <p className="font-light text-grayish-blue">
              See exactly where your money goes each month. Receive
              notifications when you're close to hitting your limits.
            </p>
          </div>
          <div className="space-y-8">
            <img src={OnboardingIcon} alt="" />
            <h3 className="text-2xl font-light">Fast Onboarding</h3>
            <p className="font-light text-grayish-blue">
              We don't do branches. Open your account in minutes online and
              start taking control of your finances right away.
            </p>
          </div>
          <div className="space-y-8">
            <img src={ApiIcon} alt="" />
            <h3 className="text-2xl font-light">Open API</h3>
            <p className="font-light text-grayish-blue">
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
