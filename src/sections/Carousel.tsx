import { technologies } from "../constants";
import { LogoIcons } from "../types/interface";

const LogoIcon = ({ icon }: { icon: LogoIcons }) => {
  return (
    <div className="flex-none flex-center marquee-item gap-3">
      <img src={icon.icon} alt={icon.name} className="size-10" />
      <span className="text-white-50 italic text-2xl text-nowrap">
        {icon.name}
      </span>
    </div>
  );
};

const Carousel = () => {
  return (
    <div className="md:my-12 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-8">
          {technologies.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}

          {technologies.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
