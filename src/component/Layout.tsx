import { Link } from "react-router-dom";
import "../component/Layout.css";
import "../view/home/Home.css";

export function Progresscontent(props: any) {
  return (
    <div className="d-flex flex-wrap mt-4 col-md-12 col-lg-10 col-12 bg-dangr p-0">
      <div
        data-aos="slide-right"
        className="skills-img col-sm-2 col-12 bg-warnng d-flex align-items-center justify-content-center"
      >
        <img className="img-fluid mb-3" src={props.img} alt="" />
      </div>
      <div className="bg-inf col p-1">
        <h4 data-aos="slide-up">{props.h5}</h4>
        <p className="mb-" data-aos="fade-up">
          {props.p}
        </p>
      </div>
    </div>
  );
}

export function Progress(props: any) {
  return (
    <div data-aos="fade-up" className="container col-12 p-0 mt-3">
      <div className="progress2  progress-moved d-flex">
        <p className="col-11">{props.p1}</p>
        <p className="col-1">{props.p2}</p>
        <div className={props.skill}></div>
      </div>
    </div>
  );
}

export function Project(props: any) {
  return (
    <div>
      <div data-aos="zoom-in-up" className="child-project-works my-3">
        <a target="_blank" href={props.to}>
          <img className="img-fluid" src={props.img} alt="" />
        </a>
      </div>
      <h4 data-aos="slide-up" className="text-break">
        {props.h4}
      </h4>
    </div>
  );
}
