import type { IndexSectionProps } from "./types";

const IndexSection: React.FC<IndexSectionProps> = ({
  title,
  isFullWidth = false,
  classes,
  children,
}) => {
  return (
    <section
      className={`indexSection ${classes} ${
        !isFullWidth ? "container mx-auto" : "!px-0"
      }`}
    >
      {title && <h2 className="indexSection__title">{title}</h2>}
      <div className="indexSection__body">{children}</div>
    </section>
  );
};

export default IndexSection;
