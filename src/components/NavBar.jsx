import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary mb-3"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          backgroundColor: "#333",
          padding: "15px 20px",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
        }}
      >
        <div className="container-sm">
          <NavLink className="navbar-brand" to="/">
            Home
          </NavLink>
          <div className="collapse navbar-collapse">
          </div>
        </div>
      </nav>
    </>
  );
}
