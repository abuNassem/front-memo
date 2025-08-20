import { useContext,useState } from "react";
import { FaLock, FaRegEye, FaUser } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { GoEyeClosed } from "react-icons/go";
import { api } from "../../template/layout";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignupForm = () => {
  const [isboldEmail, setIsBoldEmail] = useState(false);
  const [isboldPassword, setIsBoldPassword] = useState(false);
  const [isboldName, setIsBoldName] = useState(false);

  const [visable, setVisable] = useState(false);
  const [error, setErorr] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const context = useContext(api);
  const navigate = useNavigate();

  const sendForm = (e) => {
    e.preventDefault();
    if (!userName.length) {
      setErorr("enter your name");
    } else if (!password.length) {
      setErorr("enter your password");
    } else if (!email.length) {
      setErorr("enter your email");
    } else {
      axios
        .post("http://localhost:3000/users", {
          userName,
          email,
          passWord: password,
        })
        .then((res) => {
          if (!res.data) {
            console.log("there no data ");
          }
          localStorage.setItem("userName", res.data.user.userName);
          localStorage.setItem("email", res.data.user.email);
          setTimeout(() => {
            navigate("/");
          }, 1000);
          context?.setAlert((prev) => ({
            ...prev,
            isOpen: true,
            func: "success",
            textAlert: "success sign up",
          }));
        })
        .catch((error) => {
          setErorr(error.response.data.error);
        });
    }
  };

  return (
    <form
      onSubmit={sendForm}
      className="flex flex-col  items-center gap-[40px]"
    >
      <div className="flex justify-center items-center text-white w-full relative">
        <FaUser
          className="text-white absolute text-[20px] ms-2 start-[8%]"
          style={{
            color: isboldEmail
              ? "rgba(255, 255, 255, 1)"
              : "rgba(90, 90, 90, 1)",
          }}
        />
        <input
          name="userName"
          onChange={(i) => setUserName(i.currentTarget.value)}
          onFocus={() => {
            setIsBoldEmail(true);
          }}
          onBlur={() => {
            setIsBoldEmail(false);
          }}
          type="text"
          className="w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100"
          placeholder="full name"
        />
      </div>
      <div className="flex justify-center items-center text-white w-full relative">
        <MdOutlineMailOutline
          className="text-white absolute text-[20px] ms-2  start-[8%]"
          style={{
            color: isboldName
              ? "rgba(255, 255, 255, 1)"
              : "rgba(90, 90, 90, 1)",
          }}
        />
        <input
          name="email"
          onChange={(i) => setEmail(i.currentTarget.value)}
          onFocus={() => {
            setIsBoldName(true);
          }}
          onBlur={() => {
            setIsBoldName(false);
          }}
          type="text"
          className="w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100"
          placeholder="Email"
        />
      </div>
      <div className="flex justify-center items-center text-white w-full relative">
        <FaLock
          className="text-white absolute text-[20px] ms-2  start-[8%]"
          style={{
            color: isboldPassword
              ? "rgba(255, 255, 255, 1)"
              : "rgba(90, 90, 90, 1)",
          }}
        />
        <input
          name="passWord"
          onChange={(i) => setPassword(i.currentTarget.value)}
          onFocus={() => {
            setIsBoldPassword(true);
          }}
          onBlur={() => {
            setIsBoldPassword(false);
          }}
          type={visable ? "text" : "password"}
          className="w-[85%] h-[45px] bg-zinc-800 hover:bg-zinc-700 ps-[40px] duration-[0.5s] focus:bg-zinc-900 rounded-md border-2 border-zinc-100/50 outline-none focus:border-zinc-100"
          placeholder="Password"
        />
        <div className="absolute end-[10%]">
          <GoEyeClosed
            className="text-2xl cursor-pointer"
            onClick={() => setVisable(true)}
            style={{
              display: visable ? "none" : "block",
              color: isboldPassword
                ? "rgba(255, 255, 255, 1)"
                : "rgba(90, 90, 90, 1)",
            }}
          />
          <FaRegEye
            className="text-2xl cursor-pointer"
            onClick={() => setVisable(false)}
            style={{
              display: visable ? "block" : "none",
              color: isboldPassword
                ? "rgba(255, 255, 255, 1)"
                : "rgba(90, 90, 90, 1)",
            }}
          />
        </div>
      </div>
      {error ? (
        <div className="w-full rounded-lg border-2 border-zinc-700/50 text-white  bg-red-800/50 h-[45px] flex items-center justify-center">
          {error}
        </div>
      ) : null}

      <button
        type="submit"
        className="w-[60%] h-[45px] border-2 border-zinc-100/50 hover:border-zinc-100 duration-[0.5s] font-bold text-zinc-100/50 hover:text-zinc-100  hover:rounded-[30px]"
      >
        SignIn
      </button>
    </form>
  );
};

export default SignupForm;
