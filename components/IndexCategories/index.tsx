import ButtonLink from "../ButtonLink";
import IndexSection from "../IndexSection";

const IndexCategories = () => {
  return (
    <IndexSection title="کارت دعوت برای...">
      <div className="index-categories"></div>
      <div className="index-categories__action">
        <ButtonLink text="همین الان بساز" href="/panel/new" />
      </div>
    </IndexSection>
  );
};

export default IndexCategories;
