import { useEffect } from "react";
import useSWR from "swr";
import { ProfileType } from "./types";

export default function useProfile() {
  const { data: profile, mutate: mutateProfile } =
    useSWR<ProfileType>("/api/profile");

  return { profile, mutateProfile };
}
