import { useState, type FormEvent } from "react";
import type { LoginResponse } from "../../types/AuthType";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
import PreLoginComponent from "../../components/ui/PreLoginComponent";
import { useSetAtom } from "jotai";
import { userAtom } from "../../atom/store";
const LoginSection = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const setUser = useSetAtom(userAtom);
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
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

      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("token", data.accessToken);
      setUser(data);
      navigate(HOMEPAGE);
    } catch (error: any) {
      console.log(error);

      setError(error.message);
    }
  };

  return (
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
          <PrimaryCustomButton type="submit">
            Log In
          </PrimaryCustomButton>
          <a href="#" className="text-button-2 text-sm md:text-base">
            Forget Password?
          </a>
        </div>
      </form>
    </PreLoginComponent>
  );
};

export default LoginSection;
