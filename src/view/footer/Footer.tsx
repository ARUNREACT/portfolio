import "../footer/Footer.css";

export function Icon(props: any) {
  return (
    <a href={props.href}>
      <i className={props.icon}></i>
    </a>
  );
}

export function Footer() {
  return (
    <div className="main-footer bg-light py-5">
      <div className="col-md-9 col-lg-7 col-xl-6 mx-auto pt-3 p-0">
        <div className="footer-img">
          <img src={require("../../asset/logo.png")} alt="" />
          <h2>Arun</h2>
        </div>
        <div className="footer-links py-3 my-3">
          <div className="col-6 col-sm-6 p-0 ">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#project-phase">project phase</a>
          </div>
          <div className="col-6 col-sm-6 p-0 ">
            <a href="#skill">Skills</a>
            <a className="order-sm-0 order-1" href="#work">
              Project Works
            </a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="social-links my-4 ">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/arun-kumar-287995227/"
          >
            <i className="fa fa-linkedin"></i>
          </a>
          <a target="_blank" href="https://twitter.com/derrick36234887">
            <i className="fa fa-twitter"></i>
          </a>
          <a
            target="_blank"
            href="https://github.com/ARUNREACT?tab=repositories"
          >
            <i className="fa fa-github"></i>
          </a>
          <a target="_blank" href="mailto: convey2arunk@gmail.com">
            <i className="fa fa-envelope"></i>
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/mr._.h.o.l.i.d.a.y/"
          >
            <i className="fa fa-instagram"></i>
          </a>
        </div>
        <p className="text-center my-3 copy">
          Copyright ©2023 All rights reserved. ❣
        </p>
      </div>
    </div>
  );
}
