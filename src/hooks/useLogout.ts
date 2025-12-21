import { useSetAtom } from "jotai";
import { userAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";

export const useLogout = () => {
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    navigate(LOGIN);
  };
  return handleLogout;
};
