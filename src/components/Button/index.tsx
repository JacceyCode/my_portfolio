import { handleSectionScroll } from "../../../utils";
import { ButtonProp } from "../../types/interface";

const Button = ({ className, text, id }: ButtonProp) => {
  return (
    <a
      href={`#${id}`}
      className={`${className ?? ""} cta-wrapper`}
      data-testid="cta-btn"
      onClick={(e) => handleSectionScroll(e, id)}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper" data-testid="cta-btn-arrow">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
