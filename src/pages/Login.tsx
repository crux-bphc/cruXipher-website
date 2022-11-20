import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import { IconX } from "@tabler/icons";
import { useGlobalContext } from "../context/globalContext";
import { LoadingOverlay } from "@mantine/core";

const Login = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { globalDispatch } = useGlobalContext();
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
    } else {
      setIsLoading(false);
      globalDispatch({
        type: "show error",
        payload: {
          title: response.message,
          icon: <IconX size={18} />,
          message: undefined,
        },
      });
    }
  };

  if (sessionStorage.getItem("token")) navigate("/");
  return (
    <>
      <div className="w-full h-screen flex items-center pt-40 pb-20 flex-col">
        <LoadingOverlay visible={isLoading} overlayBlur={1} />
        <form className="w-1/3" onSubmit={handleLogin}>
          <h1 className="text-5xl font-bold py-8 text-center">Login</h1>
          <CustomInput
            placeholder="Team username"
            className="p-2"
            inputRef={usernameRef}
          />
          <CustomInput
            type="password"
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
