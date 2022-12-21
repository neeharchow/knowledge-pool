import React from "react";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <a className="navbar-brand" href="/dashboard">
        Knowledge Pool
      </a>
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/drops">
              Drops
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/pools">
              Pools
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/oceans">
              Oceans
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
