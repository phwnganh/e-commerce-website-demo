import { useSetAtom } from "jotai";
import { accessTookenAtom, userAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";

export const useLogout = () => {
  const setAccessToken = useSetAtom(accessTookenAtom);
  const setUser = useSetAtom(userAtom)
  const navigate = useNavigate();
  const handleLogout = () => {
    setAccessToken("");
    setUser(null)
    navigate(LOGIN);
  };
  return handleLogout;
};
