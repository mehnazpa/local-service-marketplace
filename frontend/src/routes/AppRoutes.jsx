import { Routes, Route } from "react-router-dom";

import Home from "../pages/public/Home";
import Services from "../pages/public/Services";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import Register from "../pages/auth/Register";
import ProviderRegister from "../pages/auth/ProviderRegister";

import Login from "../pages/auth/Login";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Public pages */}
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* Authentication */}
      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route
  path="/provider/register"
  element={<ProviderRegister />}
/>

    </Routes>
  );
}