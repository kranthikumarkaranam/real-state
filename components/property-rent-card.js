import { useMemo } from "react";

const PropertyRentCard = ({ propBackgroundImage }) => {
  const card12Style = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <button
      className="cursor-pointer [border:none] p-6 bg-[transparent] rounded-md w-[370px] h-[426px] flex flex-col box-border items-center justify-end bg-[url(/card-11@3x.png)] bg-cover bg-no-repeat bg-[top] min-w-[355px] max-w-[370px]"
      style={card12Style}
    >
      <div className="self-stretch h-6 flex flex-row items-end justify-center gap-[32px]">
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src="/mappin.svg" />
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-left">
            Washington
          </div>
        </div>
        <div className="flex flex-row items-start justify-end gap-[8px]">
          <img className="relative w-6 h-6" alt="" src="/arrowsout4.svg" />
          <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-left">
            12000
          </div>
        </div>
      </div>
    </button>
  );
};

export default PropertyRentCard;
