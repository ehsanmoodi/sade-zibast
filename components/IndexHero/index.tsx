import { WinkyIcon } from "../../icons";
import ButtonLink from "../ButtonLink";

const IndexHero = () => {
  return (
    <section className="index-hero">
      <h1 className="index-hero__title">
        یه کارت دعوت
        <strong> ساده </strong> بساز!
      </h1>
      <p className="index-hero__subtitle">
        چون ساده زیباست...
        <WinkyIcon />
      </p>
      <div className="index-hero__action">
        <ButtonLink text="همین الان بساز" href="/panel/cards/create" />
      </div>
    </section>
  );
};

export default IndexHero;
