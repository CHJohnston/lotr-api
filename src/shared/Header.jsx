import { NavLink } from "react-router-dom";
import { routes } from "../utils/routes";

export const Header = () => {
  return (
    <header className="fixed-top bg-color">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <h1 className="navbar-brand header-font">Lord of the Rings API</h1>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {routes.map((route, idx) => {
                if (route.isNavLink)
                  return (
                    <li key={idx} className="nav-item">
                      <NavLink
                        className={({ isActive }) =>
                          `nav-link text-light ${
                            isActive ? "active text-dark" : ""
                          }`
                        }
                        to={route.path}
                      >
                        {route.title}
                      </NavLink>
                    </li>
                  );
                return null;
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
