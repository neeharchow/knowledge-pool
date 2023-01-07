function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg px-3">
      <a className="navbar-brand" href="/dashboard">
        Knowledge Pool
      </a>
      <div className=" navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" href="/">
              Dashboard
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link active" href="/pools">
              Pools
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
