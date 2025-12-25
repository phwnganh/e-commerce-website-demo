import { useAtomValue } from "jotai";
import { accessTookenAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";

export const useLoginRequired = () => {
  const accessToken = useAtomValue(accessTookenAtom);
  const navigate = useNavigate();

  const requiredLogin = () => {
    if (!accessToken) {
      navigate(LOGIN);
      return false;
    }
    return true;
  };
  return requiredLogin;
};
