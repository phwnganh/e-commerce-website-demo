import { useSetAtom } from "jotai";
import { accessTokenAtom, userAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import {HOMEPAGE} from "../constants/route.constants";

export const useLogout = () => {
  const setAccessToken = useSetAtom(accessTokenAtom);
  const setUser = useSetAtom(userAtom)
  const navigate = useNavigate();

  const logout = () => {
      setAccessToken("");
      setUser(null)
  }
  const handleLogoutAndRedirect = () => {
    logout()
    navigate(HOMEPAGE);
  };
  return { handleLogoutAndRedirect};
};
