import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-4 mt-auto">
        <div className="container px-5">
          <div className="row align-items-center justify-content-between flex-column flex-sm-row">
            <div className="col-auto">
              <div className="small m-0 text-white">
                Copyright © Your Website 2022
              </div>
            </div>
            <div className="col-auto">
              <NavLink className="link-light small" to="/#">
                Privacy
              </NavLink>
              <span className="text-white mx-1">·</span>
              <NavLink className="link-light small" to="/#">
                Terms
              </NavLink>
              <span className="text-white mx-1">·</span>
              <NavLink className="link-light small" to="/#">
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default Footer;
