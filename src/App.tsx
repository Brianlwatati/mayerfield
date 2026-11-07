import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";

import MainLayout from "./components/sections/layouts/MainLayout";
import AuthLayout from "./components/sections/layouts/AuthLayout";
import OrderDetails from "./pages/paypages/OrderDetails";
import OrderHistory from "./pages/paypages/OrderHistory";
import CheckoutCancel from "./pages/paypages/CheckoutCancel";
import CheckoutSuccess from "./pages/paypages/CheckoutSuccess";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Cart from "./pages/paypages/Cart";
import Reviews from "./pages/Reviews";

export default function App() {
  return (
    <Routes>
      {/* Group 1: Pages using the Main Layout (Header + Footer) */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/success" element={<CheckoutSuccess />} />
        <Route path="/cancel" element={<CheckoutCancel />} />
        <Route path="/orders" element={<OrderHistory />} />
        <Route path="/orders/:id" element={<OrderDetails />} />
      </Route>

      {/* Group 2: Pages using the Auth Layout (Clean centered card) */}
      <Route element={<AuthLayout />}>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
    </Routes>
  );
}
