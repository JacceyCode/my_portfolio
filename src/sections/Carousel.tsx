import { logoIconsList } from "../constants";
import { LogoIcons } from "../types/interface";

const LogoIcon = ({ icon }: { icon: LogoIcons }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <img src={icon.imgPath} alt={"logo"} />
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}

          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
