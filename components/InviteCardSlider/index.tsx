import IndexSection from "../IndexSection";
import IndexSlide from "../IndexSlide";
import GeneralSlider from "../GeneralSlider";

const slides = [
  {
    id: 1,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=1", alt: "" }}
      />
    ),
  },
  {
    id: 2,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=2", alt: "" }}
      />
    ),
  },
  {
    id: 3,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=3", alt: "" }}
      />
    ),
  },
  {
    id: 4,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=4", alt: "" }}
      />
    ),
  },
  {
    id: 5,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=5", alt: "" }}
      />
    ),
  },
];

const InviteCardSlider = () => {
  return (
    <IndexSection isFullWidth classes="invite-card__slider">
      <div className="-my-2">
        <GeneralSlider slides={slides} />
      </div>
    </IndexSection>
  );
};

export default InviteCardSlider;
