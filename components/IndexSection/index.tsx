import type { IndexSectionProps } from "./types";

const IndexSection: React.FC<IndexSectionProps> = ({ title, children }) => {
  return (
    <section className="indexSection">
      <h2 className="indexSection__title">{title}</h2>
      <div className="indexSection__body">{children}</div>
    </section>
  );
};

export default IndexSection;
