import React from "react";
import classes from "./Project.module.css";
import Project1 from "./../../../assets/p1.jpg";
import Project2 from "./../../../assets/p2.jpg";
import Project3 from "./../../../assets/p3.jpg";

const projects = [
  {
    title: "Gaming Blog",
    stacks: ["NextJs", "MongoDb", "TypeScript", "Tailwind Css"],
    url: "https://next-blog-mu-mauve.vercel.app/",
    github: "https://github.com/MahdiZangeneh/next-blog",
    imgUrl: Project1,
  },
  {
    title: "Hotel Booking",
    stacks: [
      "ReactJs",
      "MongoDb",
      "TypeScript",
      "Tailwind Css",
      "React Query",
      "e2e test",
    ],
    url: "https://mern-hotel-booking-2fk0.onrender.com/",
    github: "https://github.com/MahdiZangeneh/mern-hotel-booking",
    imgUrl: Project2,
  },
  {
    title: "Portfolio",
    stacks: ["ReactJs", "Firebase", "Css Modules"],
    url: "https://cv-resume-gf9d.onrender.com/",
    github: "https://github.com/MahdiZangeneh/cv-resume-react-firebase",
    imgUrl: Project3,
  },
];
const Project = () => {
  return (
    <div className={classes.project}>
      <div className={classes.content}>
        <div className={classes.project__title}>
          <span>- Projects</span>
          <h3>My Recent Projects</h3>
        </div>
        <div className={classes.project__list}>
          <ul>
            {projects.map((project, index) => (
              <li key={index}>
                <div className={classes.project__inner}>
                  <div className={classes.image__box}>
                    <img src={project.imgUrl} alt={project.title} />
                  </div>
                  <div className={classes.content__box}>
                    <h3>{project.title}</h3>
                    <p>{project.stacks.join(", ")}</p>
                    <div>
                      <a href={project.github} target="new">
                        <i className="fab fa-github"></i>
                        <span>Source Code</span>
                      </a>
                      <a href={project.url} target="new">
                        <i class="fas fa-link"></i>
                        <span>Visit Online</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
