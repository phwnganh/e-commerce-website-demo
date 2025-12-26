import { useState, type FormEvent } from "react";
import { useSetAtom } from "jotai";
import { accessTokenAtom, userAtom } from "../../atom/store";
import { useNavigate } from "react-router-dom";
import { HOMEPAGE } from "../../constants/route.constants";
import PreLoginComponent from "../../components/PreLoginComponent";
import PrimaryCustomButton from "../../components/ui/PrimaryButton";
import { login } from "../../services/auth.service";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const setUser = useSetAtom(userAtom);
  const setToken = useSetAtom(accessTokenAtom);
  const navigate = useNavigate();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await login({ username, password });
      setUser(userData);
      setToken(userData.accessToken);
      navigate(HOMEPAGE);
    } catch (error: unknown) {
        if(error instanceof Error) {
            setError(error.message);
        }
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
