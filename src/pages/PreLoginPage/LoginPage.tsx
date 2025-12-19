import { useState, type FormEvent } from "react";
import { useSetAtom } from "jotai";
import { accessTookenAtom, userAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import type { LoginResponse } from "../../types/auth.type";
import { HOMEPAGE } from "../../constants/route.constants";
import PreLoginComponent from "../../components/ui/PreLoginComponent";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import { API_AUTH_LOGIN_URL } from "../../constants/api.constants";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(accessTookenAtom);
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(API_AUTH_LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: username,
          password: password,
          expiresInMins: 30, // optional, defaults to 60
        }),
        // credentials: "include",
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message);
      }

      const data: LoginResponse = await res.json();
      setUser(data);
      setToken(data.accessToken);
      navigate(HOMEPAGE);
    } catch (error: any) {
      console.log(error);

      setError(error.message);
    }
  };
  return (
    <main>
      <PreLoginComponent>
        <h3 className="text-2xl md:text-4xl">Log in to Exclusive</h3>
        <p className="text-sm md:text-base">Enter your details below</p>
        <form className="mt-12 flex flex-col gap-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-b-2 opacity-50 pb-2 focus:outline-none"
            placeholder="Username"
          />
          <div className="flex flex-col gap-1">
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border-b-2 opacity-50 pb-2 focus:outline-none"
              placeholder="Password"
            />
            <p className="text-button-2">{error}</p>
          </div>

          <div className="flex flex-row gap-21.5 items-center">
            <PrimaryCustomButton type="submit">Log In</PrimaryCustomButton>
            <a href="#" className="text-button-2 text-sm md:text-base">
              Forget Password?
            </a>
          </div>
        </form>
      </PreLoginComponent>
    </main>
  );
};

export default LoginPage;
