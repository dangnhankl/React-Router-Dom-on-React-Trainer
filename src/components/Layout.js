import React, { useState, useEffect } from "react";
import Home from "./Home";
import Login from "./Login";

import { Routes, Route, NavLink } from "react-router-dom";
import { routes } from "../config/routes";

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {
    setIsAuth(!isAuth);
  };

  useEffect(() => {
    console.table(routes);
  }, []);
  return (
    <main>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom d-flex">
          <a
            href="/"
            class="d-flex align-items-center text-body-emphasis text-decoration-none"
          >
            <span class="fs-4">Trạng thái login</span>
          </a>
          <a onClick={handleAuth} className="btn btn-primary ms-2">
            {isAuth ? "Tắt" : "Mở"}
          </a>
        </header>

        <div className="row">
          {isAuth ? (
            <>
              {routes.length > 0 && (
                <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid">
                    <div class="collapse navbar-collapse" id="navbarNav">
                      <ul class="navbar-nav">
                        {routes.map((item) => (
                          <li key={item} to={item.path} className="nav-item">
                            <NavLink
                              key={item}
                              to={item.path}
                              className={"nav-link active"}
                            >
                              {item.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </nav>
              )}
              <div class="p-5 mb-4 text-bg-dark rounded-3">
                <div class="container-fluid py-5">
                  <Routes>
                    {routes.map((item) => (
                      <Route
                        key={item}
                        element={item.component}
                        path={item.path}
                      />
                    ))}
                  </Routes>
                </div>
              </div>
            </>
          ) : (
            <div className="p-5 mb-4 bg-body-tertiary  rounded-3">
              <Login />
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Layout;
