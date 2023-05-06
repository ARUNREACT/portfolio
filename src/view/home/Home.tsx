import "./Home.css";
import { Header } from "../header/Header";
import { Footer } from "../footer/Footer";
import "../../config/Color.css";
import { Progress, Progresscontent, Project } from "../../component/Layout";

export function Dashboard() {
  return (
    <div className="home mx-auto">
      <Header />
      <div>
        <div className="main-img" id="home">
          <div className="text mt-5 pt-5 col-12 col-sm-7 col-md-6 mx-auto">
            <h2>Hi!</h2>
            <h1>I am Arun</h1>
            <p className="mb-3">Fronted Web Developer</p>

            <a href="#work">
              <button>Visit my works</button>
            </a>
          </div>
        </div>

        <div className="about py-5" id="about">
          <div className="col-12 col-md-5 d-flex justify-content-center">
            <img
              className="img-fluid py-4"
              src={require("../../asset/profile.png")}
              alt=""
            />
          </div>
          <div className="col-12 col-md-6 col-lg-5">
            <h5>Who AM I ?</h5>
            <h1>About Me</h1>
            <p>
              <span>➥</span> As a React.js frontend developer, I specialize in
              crafting dynamic and engaging user experiences. From building
              responsive interfaces to optimizing performance, I'm dedicated to
              delivering high-quality code that exceeds expectations.
            </p>
            <p>
              <span>➥</span> My approach to development is simple: put the user
              first. By prioritizing user needs and preferences, I create
              designs that are both beautiful and functional. I'm always
              exploring new technologies and design patterns to stay ahead of
              the curve.
            </p>
            <p className="pb-4">
              <span>➥</span> If you're looking for a passionate and innovative
              frontend developer, I'm your guy. Let's connect with me
              <a
                href="mailto:convey2arunk@gmail.com"
                className="fs-7 mx-2 text-dark fw-bold"
              >
                convey2arunk@gmail.com
              </a>
              and bring your project to life!
            </p>
            <a
              className="mt-5 cv"
              href={require("../../asset/Arun Kumar React JS Resume.pdf")}
              // download
              download="optional-value"
            >
              <button>Download CV</button>
            </a>
            <a
              className="mt-5 cv"
              href={require("../../asset/Arun Kumar React JS Resume.b095d5a53456f2651402 (1).png")}
              download
            >
              <button>Download CV</button>
            </a>
          </div>
        </div>

        <div className="main-project-phase " id="project-phase">
          <div className="project-back"></div>
          <div className="mainss text-center">
            <h1 className="project-phase-h1 pt-4 ">Project Phase</h1>
            <h5 className="col-sm-10 col-12 mx-auto">
              From ideation to creation, each phase is a step towards achieving
              your digital dreams.
            </h5>

            <div className="project-phase mx-auto my-lg-5 my-3 py-lg-5 py-3">
              <div className="project-phase-child ">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/graphic-design-6332596-5220374.png"
                  className="project-phase-img"
                ></img>
                <h4>Design</h4>
              </div>

              <img
                className="arrow mx-xl-5 mx-md-2"
                src={require("../../asset/arrow.png")}
                alt=""
              />

              <div className="project-phase-child">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/web-development-5617617-4674328.png"
                  className="project-phase-img"
                ></img>
                <h4>Develope</h4>
              </div>

              <img
                className="arrow mx-xl-5 mx-md-2"
                src={require("../../asset/arrow.png")}
                alt=""
              />

              <div className="project-phase-child">
                <img
                  src="https://cdn3d.iconscout.com/3d/premium/thumb/code-bug-8184687-6546967.png"
                  className="project-phase-img"
                ></img>
                <h4>Testing</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="parent-skill-set" id="skill">
          <h1 className="text-center">My Skills</h1>
          <p className="text-center text-white">
            I Like To Craft Beautiful And Scalable Web Products
          </p>
          <div className="py-sm-5 py-2 skill-set d-flex flex-wrap justify-content-center">
            <div className="skill-set-content col-12 col-sm-9 col-md-6 col-lg-5 text-white d-flex flex-column justify-content-cent">
              <Progresscontent
                img={require("../../asset/p1.png")}
                h5={`Design + Development`}
                p={`Clean, modern designs - optimized for performannce, search
            engines, and convertong users to customers.`}
              />
              <Progresscontent
                img={require("../../asset/p2.png")}
                h5={`Technology`}
                p={`Combined all the latest technologies to a progressive website.`}
              />
              <Progresscontent
                img={require("../../asset/p3.png")}
                h5={`Always Responsive`}
                p={`A responsive design makes you website accessible to all users,
              regardless of their device.`}
              />
            </div>

            <div className="col-12 col-md-5  parent-progress">
              <Progress skill={"html"} p1={`HTML`} p2={`80%`} />
              <Progress skill={"css"} p1={`CSS`} p2={`70%`} />
              <Progress skill={"bootstrap"} p1={`Bootstrap`} p2={`80%`} />
              <Progress skill={"media"} p1={`Media Query`} p2={`70%`} />
              <Progress skill={"sass"} p1={`SASS`} p2={`50%`} />
              <Progress skill={"seo"} p1={`SEO`} p2={`60%`} />
              <Progress skill={"js"} p1={`Javascript`} p2={`30%`} />
              <Progress skill={"ts"} p1={`Typescript`} p2={`30%`} />
            </div>
          </div>
        </div>

        <div className="main-works p-0" id="work">
          <div className="works-back"></div>

          <div className="col-lg-6 col-12 mx-auto works p-0">
            <h1 className="text-center pb-3">My Works</h1>

            <h2 className="text-center">Client projects</h2>
            <div className="project-works text-center">
              <Project
                to={"https://www.paype.co.in/"}
                img={require("../../asset/works/paype.png")}
                h4={`Fintech`}
              />
              <Project
                to={"https://www.planneraddict.in/"}
                img={require("../../asset/works/planner.png")}
                h4={`Event management`}
              />
            </div>
          </div>

          <div className="col-lg-12 col-xl-10 works p-0 col-12 mx-auto">
            <h2 className="text-center py-3">White Label's</h2>
            <div className="project-works text-center">
              <Project
                to={"https://main.d3k8exd9ibd63g.amplifyapp.com/"}
                h4={`Project 01`}
                img={require("../../asset/works/white1.png")}
              />
              <Project
                to={"https://main.da72npu9ha1ra.amplifyapp.com/"}
                h4={`Project 02`}
                img={require("../../asset/works/white2.png")}
              />
              <Project
                to={"https://main.dfmgn1kkcffgf.amplifyapp.com/"}
                h4={`Project 03`}
                img={require("../../asset/works/white3.png")}
              />
              <Project
                to={"https://main.d2tnzdvsjxxibx.amplifyapp.com/"}
                h4={`Project 04`}
                img={require("../../asset/works/white4.png")}
              />
              <Project
                to={"https://main.denp5gqp71m4q.amplifyapp.com/"}
                h4={`Project 05`}
                img={require("../../asset/works/white5.png")}
              />
            </div>
          </div>
        </div>

        <div className="co mb-3 l-12 p-0 parent-form" id="contact">
          <div className="col-lg-9 col-xl-7 bg-dangr  mx-auto mt-sm-5">
            <p className="m-2">How can you communicate?</p>
            <h2>Contact Me</h2>
            <form
              className="mt-3"
              action="mailto:convey2arunk@gmail.com"
              method="post"
              encType="text/plain"
            >
              <div className="main-input p-0 col-md-11 mx-auto ">
                <div className="col-sm-6">
                  <input
                    className="col-12"
                    type="text"
                    name="name"
                    id=""
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    className="col-12"
                    type="mail"
                    name="mail"
                    id=""
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="col-12"
                    name="text"
                    id=""
                    placeholder="Write Something"
                    required
                  />
                </div>
              </div>
              <div className="col-12 bg-inf p-4 mailsend">
                <input
                  className="mailbtn"
                  type="submit"
                  value="Send Message"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
