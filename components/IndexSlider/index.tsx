import IndexSection from "../IndexSection";
import IndexSlide from "../IndexSlide";
import GeneralSlider from "../GeneralSlider";

const slides = [
  {
    id: 1,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=1", alt: "" }}
        link="#"
        text="نمونه کارت عروسی"
      />
    ),
  },
  {
    id: 2,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=2", alt: "" }}
        link="#"
        text="نمونه کارت عروسی"
      />
    ),
  },
  {
    id: 3,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=3", alt: "" }}
        link="#"
        text="نمونه کارت عروسی"
      />
    ),
  },
  {
    id: 4,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=4", alt: "" }}
        link="#"
        text="نمونه کارت عروسی"
      />
    ),
  },
  {
    id: 5,
    slide: (
      <IndexSlide
        image={{ src: "https://picsum.photos/600/400?random=5", alt: "" }}
        link="#"
        text="نمونه کارت عروسی"
      />
    ),
  },
];

const IndexSlider = () => {
  return (
    <IndexSection isFullWidth title="نمونه کارت‌ها">
      <div className="-my-2">
        <GeneralSlider slides={slides} />
      </div>
    </IndexSection>
  );
};

export default IndexSlider;
