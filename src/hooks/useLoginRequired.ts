import { useAtomValue } from "jotai";
import { userAtom } from "../atom/store";
import { useNavigate } from "react-router-dom";
import { LOGIN } from "../constants/route.constants";

export const useLoginRequired = () => {
    const user = useAtomValue(userAtom);
  const navigate = useNavigate(); 
  
  const requiredLogin = () => {
      if(!user){
            navigate(LOGIN)
            return false
      }
      return true
  }
  return requiredLogin
}