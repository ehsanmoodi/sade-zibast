import {
  FeatureCalendar,
  FeatureGallery,
  FeatureMap,
  FeatureText,
} from "../../icons";
import Feature from "../Feature";
import IndexSection from "../IndexSection";

const IndexFeatures: React.FC = () => {
  const features = [
    {
      id: "map",
      icon: <FeatureMap />,
      text: "مهموناتون بدون داشتن مسیریاب خاص، محل رویداد شما رو پیدا میکنن.",
    },
    {
      id: "calendar",
      icon: <FeatureCalendar />,
      text: "وارد کردن تاریخ رویداد شما توی گوگل کلندر مهموناتون، زمانش رو بهشون مدام یادآوری میکنه.",
    },
    {
      id: "gallery",
      icon: <FeatureGallery />,
      text: "میتونید عکسای شخصیتونو توی گالری بذارید.",
    },
    {
      id: "text",
      icon: <FeatureText />,
      text: "میتونید متن دلخواه خودتونو روی کارتتون بنویسید.",
    },
  ];

  return (
    <IndexSection title="امکانات کارت دعوت">
      <div className="index-features">
        {features.map((feature) => (
          <Feature key={feature.id} icon={feature.icon} text={feature.text} />
        ))}
      </div>
    </IndexSection>
  );
};

export default IndexFeatures;
