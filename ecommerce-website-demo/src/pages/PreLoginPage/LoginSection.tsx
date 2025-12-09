import { useState, type FormEvent } from "react";
import type { LoginResponse } from "../../types/AuthType";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import PreLoginLayout from "../../components/layouts/PreLoginLayout";
import PrimaryCustomButton from "../../components/ui/PrimaryCustomButton";
const LoginSection = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
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
      navigate(HOMEPAGE);
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <PreLoginLayout>
      <h3 className="text-2xl md:text-4xl">Log in to Exclusive</h3>
      <p className="text-sm md:text-base">Enter your details below</p>
      <form className="mt-12 flex flex-col gap-10" onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border-b-2 opacity-50 pb-2 outline-none"
          placeholder="Username"
        />

        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border-b-2 opacity-50 pb-2 outline-none"
          placeholder="Password"
        />

        <div className="flex flex-row gap-21.5 items-center">
          <PrimaryCustomButton type="submit" bgColor="#DB4444">
            Log In
          </PrimaryCustomButton>
          <a href="#" className="text-[#DB4444] text-sm md:text-base">
            Forget Password?
          </a>
        </div>
      </form>
    </PreLoginLayout>
  );
};

export default LoginSection;
