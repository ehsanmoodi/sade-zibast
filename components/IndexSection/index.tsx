import type { IndexSectionProps } from "./types";

const IndexSection: React.FC<IndexSectionProps> = ({
  title,
  isFullWidth = false,
  children,
}) => {
  return (
    <section className={`indexSection ${!isFullWidth && "container mx-auto"}`}>
      <h2 className="indexSection__title">{title}</h2>
      <div className="indexSection__body">{children}</div>
    </section>
  );
};

export default IndexSection;
