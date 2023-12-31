import { ReactComponent as ArrowToRightIcon } from "../../assets/svg/arrow-to-right.svg";
import FadeLeft from "../animations/FadeLeft";
import FadeRight from "../animations/FadeRight";
import BuyForm from "../BuyForm";

const HeaderSection = () => {
  return (
    <section className="py-12 lg:py-24">
      <div className="container flex flex-col items-center gap-16 px-4 lg:flex-row lg:gap-4 lg:px-0">
        <FadeLeft className="w-full lg:w-1/2">
          <h2 className="mb-6 text-center text-3xl leading-normal lg:text-left lg:text-5xl">
            Something Better Than Meme Coin
          </h2>
          <p className="mb-8 text-center font-normal leading-relaxed text-white/80 lg:text-left lg:text-xl">
            is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#"
              className="group flex items-center gap-1 rounded-full bg-primary py-4 px-6 text-sm font-semibold text-black transition-opacity duration-200 hover:opacity-75 lg:text-base"
            >
              <span>Open dApp</span>
              <ArrowToRightIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-x-2" />
            </a>
            <a
              href="#"
              className="group flex items-center gap-1 rounded-full border-2 border-white/10 bg-secondary py-4 px-6 text-sm font-semibold transition-opacity duration-200 hover:opacity-75 lg:text-base"
            >
              <span>Whitepaper</span>
              <ArrowToRightIcon className="h-6 w-6 transition-all duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </FadeLeft>

        <FadeRight className="relative flex w-full justify-center lg:w-1/2">
          <BuyForm />
        </FadeRight>
      </div>
    </section>
  );
};

export default HeaderSection;
