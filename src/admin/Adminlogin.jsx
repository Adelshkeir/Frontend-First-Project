import "./Adminlogin.css"
import { useNavigate } from "react-router-dom";
import React , {useState} from "react";

const Adminlogin = () => {


    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate(); 
  
  
    const handleemailChange = (e) => {
      setemail(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      console.log(email, password);
  
      try {
        const response = await fetch(process.env.REACT_APP_API_URL+"/adminlogin", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        });
  
        const data = await response.json();
  
        console.log(data, "data");
  
        if (data.status === "ok") {
          alert("successfull login");
          localStorage.setItem("authToken", data.data.email); // Replace "yourAuthTokenValue" with the actual authentication token or flag.
  
          navigate("/admin-dashbord");
  
        } else {
          alert("Login failed");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };



    return (
        <div>
          <div className="login-form">
            <h1 className="login-formbuttonh1">
              <br />
              <form onSubmit={handleSubmit}>
                <input
                  placeholder="Username"
                  type="text"
                  className="login-formusername"
                  onChange={handleemailChange}
                />
                <br />
                <br />
                <input
                  placeholder="PASSWORD"
                  type="password"
                  className="login-formpassword"
                  onChange={handlePasswordChange}
                />
                <br />
                <br />
                <button className="login-formbutton" type="submit">
                  Login
                </button>
              </form>
            </h1>
          </div>
        </div>
      );
    };
  
  export default Adminlogin