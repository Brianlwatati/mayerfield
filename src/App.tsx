import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import MainLayout from "./components/sections/layouts/MainLayout";
import AuthLayout from "./components/sections/layouts/AuthLayout";

export default function App() {
  return (
    <Routes>
      {/* Group 1: Pages using the Main Layout (Header + Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* You can add additional pages here like /menu, /about, etc. */}
      </Route>

      {/* Group 2: Pages using the Auth Layout (Clean centered card) */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
