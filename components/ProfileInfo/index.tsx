import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader } from "../../icons";
import fetchJson, { initPostRequest } from "../../lib/fetchJson";
import useProfile from "../../lib/useProfile";
import { messages } from "../../utils/messages";
import Button from "../Button";
import Input from "../Input";
import { InputProps } from "../Input/types";

const ProfileInfo: React.FC = () => {
  const { profile, mutateProfile } = useProfile();

  const [processing, setProcessing] = useState<boolean>(false);

  const [state, setState] = useState<{
    id: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    mobile: string | undefined;
  }>({
    id: "",
    firstName: "",
    lastName: "",
    mobile: "",
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
      type: "string",
      label: "شماره تلفن همراه",
      value: state.mobile,
    },
  ];

  const updateProfile = async () => {
    setProcessing(true);

    try {
      await mutateProfile(
        fetchJson(
          "/api/profile-update",
          initPostRequest({
            name: state.firstName,
            lastname: state.lastName,
          })
        )
      );

      setProcessing(false);
      toast.success(messages.successProfileUpdate);
    } catch (error) {
      setProcessing(false);
      toast.error(messages.generalError);
      console.log(error);
    }
  };

  useEffect(() => {
    setState({
      id: profile?.id,
      firstName: profile?.name,
      lastName: profile?.lastname,
      mobile: profile?.mobile,
    });
  }, [profile]);

  return (
    <div className="profile-info">
      <div className="profile-info__form">
        {formInputs.map((input) => (
          <Input
            key={input.id}
            id={input.id}
            type={input.type}
            label={input.label}
            value={input.value}
            disabled={input.id === "mobile"}
            onChange={(event) => {
              setState({ ...state, [input.id]: event.target.value });
            }}
          />
        ))}
      </div>
      <div className="profile-info__actions">
        <Button onClick={updateProfile} processing={processing}>
          ثبت
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;
