import { useState } from "react";
import {
  UserRound,
  BriefcaseBusiness,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Phone,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [role, setRole] = useState("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        role: role,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // Save JWT token
    localStorage.setItem("token", data.token);

    // Save logged-in user information
    localStorage.setItem("user", JSON.stringify(data.user));

    alert("Login successful!");

    // Navigate according to role
    if (data.user.role === "customer") {
      navigate("/customer/dashboard");
    } else {
      navigate("/provider/dashboard");
    }
  } catch (error) {
    console.error("Login error:", error);

    alert(
      "Unable to connect to the server. Please make sure the backend is running."
    );
  }
};

  return (
    <div className="auth-page">

      {/* Mobile top bar */}
      <div className="auth-mobile-header">
        <div
          className="auth-logo"
          onClick={() => navigate("/")}
        >
          <div className="logo-icon">N</div>

          <div>
            <h2>NearHand</h2>
            <span>Your Service, Near You</span>
          </div>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Main authentication card */}
      <div className="auth-container">

        {/* Logo */}
        <div
          className="auth-brand"
          onClick={() => navigate("/")}
        >
          <div className="auth-brand-icon">N</div>

          <div>
            <h1>NearHand</h1>
            <p>Your Service, Near You</p>
          </div>
        </div>

        {/* Role selection */}
        <div className="role-selection">

          {/* Customer */}
          <button
            type="button"
            className={`role-card ${
              role === "customer" ? "active" : ""
            }`}
            onClick={() => setRole("customer")}
          >
            <div className="role-icon customer-icon">
              <UserRound size={24} />
            </div>

            <div className="role-content">
              <h3>I need a service</h3>
              <p>Find trusted professionals near you</p>
            </div>
          </button>

          {/* Provider */}
          <button
            type="button"
            className={`role-card ${
              role === "provider" ? "active" : ""
            }`}
            onClick={() => setRole("provider")}
          >
            <div className="role-icon provider-icon">
              <BriefcaseBusiness size={24} />
            </div>

            <div className="role-content">
              <h3>I offer services</h3>
              <p>Join as a professional service provider</p>
            </div>
          </button>

        </div>

        {/* Login / Register switch */}
        <div className="auth-tabs">

          <button
            className="auth-tab active"
            type="button"
          >
            Sign in
          </button>

          <button
  type="button"
  className="auth-tab"
  onClick={() => {
    if (role === "customer") {
      navigate("/register");
    } else {
      navigate("/provider/register");
    }
  }}
>
  Create account
</button>

        </div>

        {/* Login form */}
        <form onSubmit={handleLogin}>

          {/* Email */}
          <div className="form-group">
            <label>Email </label>

            <div className="input-wrapper">
              <Mail size={18} />

              <input
                type="text"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <div className="input-wrapper">
              <Lock size={18} />

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Sign in */}
          <button className="sign-in-btn" type="submit">
            Sign in
          </button>

        </form>

        {/* Forgot password */}
        <button
          className="forgot-password"
          type="button"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot your password? We'll help you reset it.
        </button>

        {/* Bottom information */}
        <p className="auth-footer-text">
          By continuing, you agree to NearHand's{" "}
          <span>Terms of Service</span> and{" "}
          <span>Privacy Policy</span>.
        </p>

      </div>

      {/* Background decoration */}
      <div className="auth-decoration decoration-one"></div>
      <div className="auth-decoration decoration-two"></div>

    </div>
  );
}