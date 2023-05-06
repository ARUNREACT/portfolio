import { List, XCircleFill } from "react-bootstrap-icons";
import { useState } from "react";
import "../header/Header.css";

interface HeaderOptionProps {
  href: string;
  footaname: string;
  closeOffCanvas: () => void;
}

export function HeaderOption(props: HeaderOptionProps) {
  const handleClick = () => {
    props.closeOffCanvas();
  };

  return (
    <li className="nav-item">
      <a
        className="nav-link"
        href={props.href}
        onClick={handleClick}
        // target="_blank"
      >
        {props.footaname}
      </a>
    </li>
  );
}

export function Header() {
  const [offCanvasOpen, setOffCanvasOpen] = useState(false);

  const handleOffCanvasClose = () => {
    setOffCanvasOpen(false);
  };

  return (
    <div className="header fixed-top" data-aos="zoom-in">
      <nav className="navbar navbar-expand-md  p-0 ">
        <div className="p-2 col-lg-10 mx-auto d-flex align-items-center justify-content-between">
          <a className="head-logo " href="#home">
            <img
              src={require("../../asset/logo.png")}
              alt="paype logo"
              className="logo-circle"
            />
          </a>
          <a
            className="navbar-toggler border-0 p-2 col "
            onClick={() => setOffCanvasOpen(true)}
            aria-controls="offcanvasExample"
          >
            <i className="display-5 list col-12  d-flex justify-content-end">
              <List />
            </i>
          </a>
          <div
            className={`offcanvas offcanvas-start-md ${
              offCanvasOpen ? "show" : ""
            }`}
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <a className="head-logo" href="#home">
                <img
                  src={require("../../asset/logo.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </a>
              <a
                href="javascript:void(0) "
                className="text-reset p-0 mb-1"
                onClick={() => setOffCanvasOpen(false)}
                aria-label="close"
              >
                <i className="fs-1 text-light ">
                  <XCircleFill />
                </i>
              </a>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav">
                <HeaderOption
                  href={"#home"}
                  footaname={"Home"}
                  closeOffCanvas={handleOffCanvasClose}
                />
                <HeaderOption
                  href={"#about"}
                  footaname={"About"}
                  closeOffCanvas={handleOffCanvasClose}
                />
                <HeaderOption
                  href={"#project-phase"}
                  footaname={"Project phase"}
                  closeOffCanvas={handleOffCanvasClose}
                />
                <HeaderOption
                  href={"#skill"}
                  footaname={"Skills"}
                  closeOffCanvas={handleOffCanvasClose}
                />
                <HeaderOption
                  href={"#work"}
                  footaname={"Project Works"}
                  closeOffCanvas={handleOffCanvasClose}
                />
                <HeaderOption
                  href={"#contact"}
                  footaname={"Contact"}
                  closeOffCanvas={handleOffCanvasClose}
                />
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
