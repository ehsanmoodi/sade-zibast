import Link from "next/link";
import { Heart } from "../../icons";

const MainFooter = () => {
  return (
    <footer className="footer">
      <div className="footer__text">
        ساخته شده با
        <Heart />
      </div>
      <div className="footer__copy-right">
        کلیه حقوق مادی و معنوی این وبسایت متعلق به تیم
        <Link href="/">“ساده زیباست”</Link>
        می‌باشد.
      </div>
    </footer>
  );
};

export default MainFooter;
