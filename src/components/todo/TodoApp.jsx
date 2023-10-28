import "./TodoApp.css";
import LogoutComponent from "./LogoutComponent";
import FooterComponent from "./FooterComponent";
import HeaderComponent from "./HeaderComponent";
import ErrorComponent from "./ErrorComponent";
import ListTodosComponent from "./ListTodosComponent";
import WelcomeComponent from "./WelcomeComponent";
import LoginComponent from "./LoginComponent";

import { BrowserRouter, Route,Routes } from "react-router-dom";

export default function TodoApp() {
  return (
    <div className="TodoApp">
      {/* Todo Management Application */}

      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/login" element={<LoginComponent />} />
          <Route path="/welcome/:username" element={<WelcomeComponent />} />
          <Route path="/todos" element={<ListTodosComponent />} />
          <Route path="/logout" element={<LogoutComponent />} />

          <Route path="*" element={<ErrorComponent />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </div>
  );
}









