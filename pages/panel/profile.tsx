import type { NextPage } from "next";
import { useState } from "react";
import { Button, Input } from "../../components";
import { InputProps } from "../../components/Input/types";
import { PanelTemplate } from "../../templates";

interface ProfileProps {
  data: {
    firstName?: string;
    lastName?: string;
    mobile?: number | string;
    email?: string;
  };
}

const Profile: NextPage<ProfileProps> = ({ data }) => {
  const [state, setState] = useState({
    firstName: data.firstName,
    lastName: data.lastName,
    mobile: data.mobile,
    email: data.email,
  });

  const formInputs: InputProps[] = [
    {
      id: "firstName",
      type: "text",
      label: "نام",
      value: state.firstName,
    },
    {
      id: "lastName",
      type: "text",
      label: "نام خانوادگی",
      value: state.lastName,
    },
    {
      id: "mobile",
      type: "number",
      label: "شماره تلفن همراه",
      value: state.mobile,
    },
    {
      id: "email",
      type: "email",
      label: "ایمیل",
      value: state.email,
    },
  ];

  return (
    <PanelTemplate
      title="حساب کاربری"
      metaTitle="حساب کاربری"
      metaDescription="در صفحه حساب کاربری ساده زیباست می‌توانید پروفایل خود را بروزرسانی کنید"
    >
      <div className="profile">
        <div className="profile__form">
          {formInputs.map((input) => (
            <Input
              key={input.id}
              id={input.id}
              type={input.type}
              label={input.label}
              value={input.value}
              onChange={(event) => {
                setState({ ...state, [input.id]: event.target.value });
              }}
            />
          ))}
        </div>
        <div className="profile__actions">
          <Button>ثبت</Button>
        </div>
      </div>
    </PanelTemplate>
  );
};

export const getServerSideProps = () => {
  const data = {
    firstName: "احسان",
    lastName: "مودی",
    mobile: "09902684169",
    email: "ehsanmoodi90@gmail.com",
  };

  return {
    props: { data },
  };
};

export default Profile;
