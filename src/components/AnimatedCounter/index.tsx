import CountUp from "react-countup";
import { counterItems } from "../../constants";

const AnimatedCounter = () => {
  return (
    <div
      id="counter"
      data-testid="counter"
      className="padding-x-lg mt-32 xl:mt-0"
    >
      <div className="mx-auto grid-4-cols sm:grid-cols-2 xl:grid-cols-4 !gap-3 md:!gap-7">
        {counterItems.map((item) => (
          <div
            key={item.label}
            className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
          >
            <div className="counter-number text-white text-5xl font-bold mb-2">
              <CountUp end={item.value} />
              {item.suffix}
            </div>
            <div data-testid="counter-label" className="text-white-50 text-lg">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
