import { useState, type FormEvent } from "react";
import prelogin from "../../assets/prelogin.png";
import type { LoginResponse } from "../../types/AuthType";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
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
    <section className="max-w-[1170px] mx-auto justify-center mt-15 mb-[140px]">
      <div className="flex items-center">
        <div className="basis-[60%]">
          <img src={prelogin} alt="pre-login-img" className="w-full" />
        </div>
        <div className="basis-[40%]">
          <div className="flex justify-end">
            <div className="flex flex-col gap-6">
              <h3 className="text-4xl">Log in to Exclusive</h3>
              <p>Enter your details below</p>
              <form
                className="mt-12 flex flex-col gap-10"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="border-b-2 opacity-50 pb-2"
                  placeholder="Username"
                />

                <input
                  type="password"
                  name="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="border-b-2 opacity-50 pb-2"
                  placeholder="Password"
                />

                <div className="flex flex-row gap-21.5 items-center">
                  <button
                    type="submit"
                    className="bg-[#DB4444] text-[#FAFAFA] rounded-sm py-4 px-12"
                  >
                    Log In
                  </button>
                  <a href="#" className="text-[#DB4444]">
                    Forget Password?
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
