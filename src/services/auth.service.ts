import { API_AUTH_LOGIN_URL } from "../constants/api.constants";
import type { LoginPayload, LoginResponse } from "../types/auth.type";

export const login = async (payload: LoginPayload): Promise<LoginResponse> => {
  try {
    const res = await fetch(API_AUTH_LOGIN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, expiresInMins: 30 }),
    });
    return res.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
