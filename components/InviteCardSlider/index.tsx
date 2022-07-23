import IndexSection from "../IndexSection";
import IndexSlide from "../IndexSlide";
import GeneralSlider from "../GeneralSlider";

import type { InviteCardSliderProps } from "./types";

const InviteCardSlider: React.FC<InviteCardSliderProps> = ({ images }) => {
  const slides: {
    id: string;
    slide: JSX.Element;
  }[] = [];

  images.forEach((item) =>
    slides.push({
      id: item.name,
      slide: <IndexSlide image={{ src: item.url, alt: item.name }} />,
    })
  );

  return (
    <IndexSection isFullWidth classes="invite-card__slider">
      <div className="-my-2">
        <GeneralSlider slides={slides} />
      </div>
    </IndexSection>
  );
};

export default InviteCardSlider;
