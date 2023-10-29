import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./security/AuthContext";

export default function LoginComponent() {
    const [username, setUsername] = useState("suraj");
    const [password, setPassword] = useState("");
    const [showErrorMessage, setShowErrorMessage] = useState(false);
  
    const navigate = useNavigate()

    const authContext = useAuth()
  
    function handleUsernameChange(event) {
      // console.log(event.target.value)
      setUsername(event.target.value);
    }
  
    function handlePasswordChange(event) {
      //console.log(event.target.value)
      setPassword(event.target.value);
    }
  
    function handleSubmit() {
      if (authContext.login(username, password)) {
        navigate(`/welcome/${username}`)
      } else {
        setShowErrorMessage(true)
      }
    }

    return (
      <div className="Login">
        <h1>Time To Login! </h1>
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