import Image from "next/image";

import houseLine  from "public/houseline.svg";
import socialMediaLogo  from "public/social-media-logo.svg";
import socialMediaLogo1  from "public/social-media-logo1.svg";
import socialMediaLogo2  from "public/social-media-logo2.svg";
import socialMediaLogo3  from "public/social-media-logo3.svg";
import socialMediaLogo4  from "public/social-media-logo4.svg";
const Footer = () => {
  return (
    <div
      className="self-stretch overflow-hidden flex flex-row p-[50px] items-start justify-start md:w-auto md:flex-row sm:flex-col"
      
    >
      <footer className="flex-1 flex flex-row items-start justify-between text-left text-5xl text-gray-black font-body-regular-400 md:flex-col md:gap-[50px] sm:flex-col sm:gap-[50px]">
        <div className="w-[312px] flex flex-col items-start justify-start gap-[20px] text-center text-primary-500 font-body-regular-600">
          <div className="flex flex-row items-center justify-center gap-[8px]">
            <Image className="w-11 h-11" alt="" src={houseLine} />
            <div className="flex flex-col items-start justify-start">
              <div className="leading-[24px] font-semibold">REIS</div>
              <div className="text-sm leading-[16px] font-medium">
                Real State
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[13px] text-left text-base text-gray-500 font-body-regular-400">
            <div className="text-5xl leading-[32px] font-semibold text-gray-black">
              Contact Us
            </div>
            <div className="leading-[24px]">Call : +123 400 123</div>
            <div className="leading-[24px] flex items-end">
              Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
              auctor felis.
            </div>
            <div className="leading-[24px] text-gray-700">
              Email: example@mail.com
            </div>
          </div>
          <div className="w-[304px] flex flex-row items-center justify-between">
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <Image
                className="w-5 h-[21.67px]"
                alt=""
                src={socialMediaLogo}

              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <Image
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo1}
              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <Image
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo2}
              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <Image
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo3}
              />
            </button>
            <button className="cursor-pointer [border:none] p-3.5 bg-primary-50 rounded flex flex-col items-center justify-center">
              <Image
                className=" w-5 h-5 overflow-hidden shrink-0"
                alt=""
                src={socialMediaLogo4}
              />
            </button>
          </div>
        </div>
        <div className="w-[173px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Features</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px] text-base text-gray-500">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Home
            </button>
            <div className="leading-[24px]">
              Become a Host
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Pricing
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Blog
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Contact
            </button>
          </div>
        </div>
        <div className="w-[173px] h-[248px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">Company</div>
          <div className="self-stretch h-[184px] flex flex-col items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              About Us
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Press
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Contact
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Careers
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Blog
            </button>
          </div>
        </div>
        <div className="w-[203px] h-[168px] flex flex-col items-start justify-start gap-[32px]">
          <div className="leading-[32px] font-semibold">
            Team and policies
          </div>
          <div className="self-stretch h-[104px] flex flex-col items-start justify-start gap-[16px]">
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Terms of servies
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Privacy Policy
            </button>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] text-base leading-[24px] font-body-regular-400 text-gray-500 text-left inline-block">
              Security
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
