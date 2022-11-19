import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { useGlobalContext } from "../context/globalContext";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { globalDispatch, globalState } = useGlobalContext();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (event: React.FormEvent<HTMLElement>) => {
    setIsLoading(true);
    event.preventDefault();
    const loginDetails = {
      username: usernameRef.current?.value,
      password: passwordRef.current?.value,
    };

    const response = await (
      await fetch(
        (import.meta.env.VITE_BACKEND_URL
          ? import.meta.env.VITE_BACKEND_URL
          : "") + "/api/login",
        {
          method: "POST",
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
          mode: "cors",
          body: JSON.stringify(loginDetails),
        }
      )
    ).json();
    if (response.token) {
      setIsLoading(false);
      // If login is successful, navigate to app
      sessionStorage.setItem("token", response.token as string);
      if (sessionStorage.getItem("token")) navigate("/");
    }
  };

  if (sessionStorage.getItem("token")) navigate("/");
  return (
    <>
      <div className="w-full h-screen flex items-center pt-56 flex-col">
        <form className="w-1/3" onSubmit={handleLogin}>
          <h1 className="text-6xl font-bold py-8 text-center">Login</h1>
          <CustomInput
            placeholder="Team username"
            className="p-2"
            inputRef={usernameRef}
          />
          <CustomInput
            placeholder="Team password"
            className="p-2"
            inputRef={passwordRef}
          />
          <CustomButton text="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
