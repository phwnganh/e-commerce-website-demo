import { useSetAtom } from "jotai";
import { accessTookenAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";

export const useLogout = () => {
  const setAccessToken = useSetAtom(accessTookenAtom);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccessToken("");
    navigate(LOGIN);
  };
  return handleLogout;
};
