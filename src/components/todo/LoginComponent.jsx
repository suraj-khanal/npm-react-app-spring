import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginComponent() {
    const [username, setUsername] = useState("suraj");
    const [password, setPassword] = useState("");
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);
  
    const navigate = useNavigate();
  
    function handleUsernameChange(event) {
      // console.log(event.target.value)
      setUsername(event.target.value);
    }
  
    function handlePasswordChange(event) {
      //console.log(event.target.value)
      setPassword(event.target.value);
    }
  
    function handleSubmit() {
      if (username === "suraj" && password === "password") {
        console.log("success");
        setShowSuccessMessage(true);
        setShowErrorMessage(false);
        navigate(`/welcome/${username}`);
      } else {
        console.log("Failed");
        setShowSuccessMessage(false);
        setShowErrorMessage(true);
      }
    }
    // function SuccessMessageComponent(){
    //     if (showSuccessMessage) {
    //         return <div className="SuccessMessage">Authenticated Sucessfully</div>
    //     }
    //     return null
    // }
    // function ErrorMessageComponent(){
    //     if (showErrorMessage) {
    //         return <div className="errorMessage">Authentication Failed. Please Check your credentials</div>
    //     }
    //     return null
    // }
  
    return (
      <div className="Login">
        <h1>Time To Login! </h1>
        {/* <SuccessMessageComponent /> */}
        {showSuccessMessage && (
          <div className="SuccessMessage">Authenticated Sucessfully</div>
        )}
  
        {/* <ErrorMessageComponent /> */}
        {showErrorMessage && (
          <div className="errorMessage">
            Authentication Failed. Please Check your credentials
          </div>
        )}
  
        <div className="LoginForm">
          <div>
            <label>Username</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
  
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div>
            <button type="button" name="login" onClick={handleSubmit}>
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }