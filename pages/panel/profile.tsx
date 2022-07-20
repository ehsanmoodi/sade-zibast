import type { NextPage } from "next";
import { ProfileInfo } from "../../components";
import { PanelTemplate } from "../../templates";

const Profile: NextPage = () => {
  return (
    <PanelTemplate
      title="حساب کاربری"
      metaTitle="حساب کاربری"
      metaDescription="در صفحه حساب کاربری ساده زیباست می‌توانید پروفایل خود را بروزرسانی کنید"
    >
      <ProfileInfo />
    </PanelTemplate>
  );
};

export default Profile;
