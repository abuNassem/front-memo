import {  useEffect } from "react";
import axios from "axios";
import Loader from "../component/feedback/loading";

const Auth = () => {
  const params = new URLSearchParams(window.location.search);
  const token = params.get("token");
  useEffect(() => {
    if (!token) return;


         axios.get("/api/auth/profile", {
          headers: { Authorization: `Bearer ${token}` },
        }).then( res=>{

        localStorage.setItem("token", token);
        localStorage.setItem("userName", res.data.userName);
       localStorage.setItem("email", res.data.email);
       
    window.location.href='/'        
}).catch (err=>{
        console.error("ERROR fetching profile:", err.response?.data || err.message);

        })


  }, [token]);

  return <div>..... loading <Loader/></div>;
};

export default Auth;
