import Link from "next/link";

const Header = () => {
  return (
    <header className="self-stretch bg-gray-white h-[98px] flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] z-[2] text-center text-5xl text-primary-500 font-body-regular-600 lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
      <div className="flex-1 flex flex-row items-center justify-between">
        <Link href="/" className="flex flex-row items-center justify-center gap-[8px]">
          <img className="relative w-11 h-11" alt="" src="/houseline.svg" />
          <div className="flex flex-col items-start justify-start">
            <div className="relative leading-[24px] font-semibold">REIS</div>
            <div className="relative text-sm leading-[16px] font-medium">
              Real State
            </div>
          </div>
        </Link>
        <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
          <div className="flex flex-row items-start justify-start gap-[30px] lg:hidden">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              HOME
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              ABOUT US
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              OUR AGENTS
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-semibold font-body-regular-600 text-primary-900 text-center inline-block">
              PROPERTIES
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              GALLERY
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              BLOG
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              CONTACT US
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm leading-[22px] font-body-regular-600 text-primary-900 text-center inline-block">
              SEARCH
            </button>
          </div>
          <button className="cursor-pointer [border:none] p-0 bg-[transparent] hidden flex-row items-center justify-center lg:flex">
            <img
              className="relative w-6 h-6 overflow-hidden shrink-0 md:flex"
              alt=""
              src="/notification.svg"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
