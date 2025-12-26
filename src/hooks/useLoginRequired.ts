import { useAtomValue } from "jotai";
import { accessTokenAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";
// function requiredlogin bi redundant la do moi lan component render -> hook auto tao function moi
// logic check login + navigate thuong lap lai nhieu cho
export const useLoginRequired = () => {
  const accessToken = useAtomValue(accessTokenAtom);
  const navigate = useNavigate();
  const isLoggedIn = !!accessToken;

  const requiredLogin = () => {
      navigate(LOGIN);

  };
  return {isLoggedIn, requiredLogin};
};
