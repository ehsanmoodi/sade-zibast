import Router from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import { Token } from "./types";

export const useToken = ({ redirectTo = "", redirectIfFound = false } = {}) => {
  const { data: token, mutate: mutateToken } = useSWR<Token>("/api/token");

  useEffect(() => {
    if (!redirectTo || !token) return;

    if (
      // If redirectTo is set, redirect if the user was not found.
      (redirectTo && !redirectIfFound && !token?.isLoggedIn) ||
      // If redirectIfFound is also set, redirect if the user was found
      (redirectIfFound && token?.isLoggedIn)
    ) {
      Router.push(redirectTo);
    }
  }, [token, redirectIfFound, redirectTo]);

  return { token, mutateToken };
};

export default useToken;
