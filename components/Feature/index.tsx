import type { FeatureProps } from "./types";

const Feature: React.FC<FeatureProps> = ({ icon, text }) => {
  return (
    <div className="feature">
      {icon}
      {text}
    </div>
  );
};

export default Feature;
