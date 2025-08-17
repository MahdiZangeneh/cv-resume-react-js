import React, { useState } from "react";
import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import Button from "../../UI/Button";

import classes from "./Experience.module.css";

const experiences = [
  {
    id: "1",
    title: "Senior Frontend Developer",
    imageUrl: "https://www.aleph-labs.com/static/Studios/MY/my-hero.jpg",
    duration: {
      startDate: "Jul 2025",
      endDate: "Present",
    },
    company: "Aleph Labs",
    location: "Kuala Lumpur, Malaysia",
    description:
      "Aleph-Labs is a digital consulting company, delivering design and engineering solutions for enterprise clients.",
    descriptions: [
      "Worked closely with backend teams to integrate APIs for real-time financial data and ensure compliance with government regulations.",
      "Implemented secure, user-friendly interfaces to support online contributions, withdrawals, and account tracking.",
      "Enhanced UI/UX with responsive design, improving user satisfaction and reducing support requests.",
      "Built and enhanced customer self-service portals for broadband, IPTV, and telecommunication services",
      "Ensured cross-platform responsiveness for mobile and desktop users",
      "Improved portal usability, helping reduce customer service dependency and enhancing the digital experience for millions of users.",
    ],
    skills: [
      "React Native",
      "Redux",
      "React Query",
      "Typescript",
      "JavaScript",
      "ReactJs",
      "TypeScript",
      "ReactJs",
      "NextJs",
      "Scss",
      "HTML",
      "Drupal",
      "Vanilla CSS",
      "Git",
      "Gitlab",
      "Github",
      "Agile",
      "Jenkins",
    ],
  },
  {
    id: "2",
    title: "Fullstack Developer",
    imageUrl:
      "https://cdn.prod.website-files.com/636c3799fc681f2b9598d7ba/63c07c9b5e580a6845f744b4_BrandedSlide-01-p-1600.png",
    duration: {
      startDate: "Dec 2024",
      endDate: "Jul 2025",
    },
    company: "Streamline Studios",
    location: "Kuala Lumpur, Malaysia",
    description:
      "Streamline is a gaming company leading platform for high-quality illustrations and design assets.",
    descriptions: [
      "Utilized PlayFab to manage scalable game databases and player authentication.",
      "Developed and refined in-game features using Construct 3, Typescript, and JavaScript.",
      "Built and maintained Webflow-based website to support the game’s online ecosystem.",
      "Implemented responsive, user-friendly features to enhance player experience across devices.",
    ],
    skills: [
      "Construct 3",
      "JavaScript",
      "TypeScript",
      "Webflow",
      "HTML",
      "Vanilla CSS",
      "REST API",
      "PlayFab",
    ],
  },
  {
    id: "3",
    title: "Backend Developer",
    imageUrl:
      "https://cdn.shopify.com/s/files/1/0058/7402/4508/files/Lusio_and_GNT_MediXcel_SDN_BHD_logo_480x480.png?v=1691550341",
    duration: {
      startDate: "Apr 2024",
      endDate: "Present - Remote Part-Time",
    },
    company: "Lusio Rehab",
    location: "Sydney, Australia",
    description:
      "Lusio Rehab is a health-tech startup that provides gamified rehab solutions using wearable IoT devices.",
    descriptions: [
      "Implemented new backend features and APIs using Node.js to support both the mobile application and clinician dashboard",
      "Fixed bugs and optimized backend processes to ensure smooth system performance and reliability.",
      "Integrated Firebase and Google Cloud services for secure data storage and real-time synchronization.",
      "Collaborated with frontend teams to design and deliver scalable, efficient APIs that improved patient and clinician user experience.",
    ],
    skills: [
      "NodeJs",
      "JavaScript",
      "TypeScript",
      "Firestore",
      "Firebase",
      "Google Cloud",
      "REST API",
      "JSON",
      "Git",
      "Postman",
    ],
  },
  {
    id: "4",
    title: "Back-End Developer",
    imageUrl:
      "https://www.whipmobility.com/wp-content/uploads/2022/08/WHIP-website-2-1024x724.jpg",
    duration: {
      startDate: "Feb 2021",
      endDate: "Nov 2024",
    },
    company: "Whip Mobility sdn",
    location: "Selangor, Malaysia",
    description:
      "WHIP  is a SaaS platform focused on delivering digital success for our automotive retail clients.",
    descriptions: [
      "Designed, developed, tested, and debugged RESTful APIs using NestJS, ensuring scalability and maintainability.",
      "Built and optimized database models with MongoDB, Mongoose, Typegoose, Firebase, and Firestore, reducing data retrieval times by 30% and improving overall system performance.",
      "Integrated third-party services including payment gateways (Adyen, Stripe) and DMS platforms (CDK, Fortellis, Salesforce)",
      "Collaborated with frontend developers to document and present APIs (via JSDoc), ensuring efficient integration.",
      "Reviewed backend development work of peers to enforce coding standards, resolve technical issues, and ensure consistent design patterns",
      "Contributed to an Agile environment, delivering features on time and driving a 30% revenue increase through new partnerships",
      "Delivered tailored features, system integrations, and platform enhancements to support business operations and customer engagement.",
      "Developed dynamic user interfaces and web applications using ReactJS, React Query, NextJS, TailwindCSS, CSS Modules, and Redux.",
      "Built responsive, mobile-friendly designs ensuring consistent user experiences across devices.",
      "Implemented state management solutions and optimized component rendering for performance improvements.",
    ],
    skills: [
      "NestJS",
      "Node.js",
      "TypeScript",
      "JavaScript",
      "MongoDB",
      "Firebase",
      "Firestore",
      "AWS",
      "Stripe",
      "Salesforce",
      "CDK",
      "Fortellis",
      "ReactJS",
      "REST API",
      "React Query",
      "NextJS",
      "TailwindCSS",
      "CSS Modules",
      "Redux",
    ],
  },
  {
    id: "5",
    title: "Senior Front End Developer",
    imageUrl: "https://marketifythemes.net/html/elisc/img/experience/1.jpg",
    duration: {
      startDate: "Jan 2018",
      endDate: "Jan 2021",
    },
    company: "ShahreNovin",
    location: "Tehran, Iran",
    description:
      "ShahreNovin Software Company, Provides all-in-one business management software.",
    descriptions: [
      "Developed and launched 10+ responsive websites using HTML, CSS, React, JavaScript, and TypeScript, driving a 40% increase in online sales and a 25% boost in organic traffic growth",
      "Built and deployed Progressive Web Applications (PWAs) to deliver mobile-friendly and offline-first user experiences.",
      "Published over 20 custom responsive websites tailored to client requirements, ensuring cross-browser and crossdevice compatibility.",
      "Implemented CMS-based solutions, enabling clients to manage and scale content efficiently",
      "Successfully acquired 50+ new clients requesting websites and CMS services, contributing to rapid business growth.",
    ],
    skills: [
      "ReactJs",
      "Jacascript",
      "TypeScript",
      "ReactQuery",
      "jQuery",
      "Typescript",
      "JSON",
      "REST API",
      "Html",
      "Css",
      "Redux",
      "Hooks",
      "SCSS",
      "Styled-Component",
      "Bootstrap",
      "PWA",
    ],
  },
  {
    id: "6",
    title: "Front End Developer",
    imageUrl: "https://marketifythemes.net/html/elisc/img/experience/1.jpg",
    duration: {
      startDate: "May 2015",
      endDate: "Jan 2018",
    },
    company: "Samanama",
    location: "Tehran, Iran",
    description:
      "Samanama was a company that designed, and developed software services and information solutions.",
    descriptions: [
      "Samanama was a company that designed, and developed software services and information solutions. Among a plethora of services, web design and development, e-commerce solutions, business-to-business applications, business-to-client applications, news portals, and professional video services are a few that was offered.",
    ],
    skills: [
      "HTML",
      "CSS",
      "jQuery",
      "Bootstrap",
      "Foundation",
      "JavaScript",
      "React",
    ],
  },
];

const Experience = (props) => {
  const [modalIsShown, setModalIsShown] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState(null);

  const showModalHandler = () => {
    setModalIsShown(true);
  };

  const hideModalHandler = () => {
    setModalIsShown(false);
  };

  const handleExperienceClick = (experience) => {
    setSelectedExperience(experience);
  };

  return (
    <div className={classes.experience} id={props.id}>
      <div className={classes.content}>
        <div className={classes.experience__title}>
          <span>- Experience</span>
          <h3>Places I worked so far!</h3>
        </div>
        <div className={classes.experience__list}>
          <ul>
            {experiences.map((experience) => (
              <li key={experience.id}>
                <Card
                  className={classes.hover}
                  onClick={() => {
                    showModalHandler();
                    handleExperienceClick(experience);
                  }}
                >
                  <div className={classes.job}>
                    <div className={classes.job__info}>
                      <span>{`-${experience.duration.startDate} -${experience.duration.endDate}`}</span>
                      <h3>{`${experience.title}`}</h3>
                    </div>
                    <div className={classes.job__place}>
                      <span>{`-${experience.location}`}</span>
                    </div>
                  </div>
                  <div className={classes.description}>
                    <p>{experience.description}</p>
                    <Button className={classes["button--customised"]}>
                      Read More
                    </Button>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
          {modalIsShown && (
            <Modal onModalBackdropClick={hideModalHandler}>
              <div className={classes.modal__image}>
                <div
                  style={{
                    backgroundImage: `url(${selectedExperience.imageUrl})`,
                  }}
                ></div>
              </div>
              <div className={classes.modal__tags}>
                {selectedExperience.skills.map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
              <div className={classes.modal__info}>
                <span>{selectedExperience.company}</span>
                <span>{`-${selectedExperience.duration.startDate} -${selectedExperience.duration.endDate}`}</span>
                <h3>{selectedExperience.title}</h3>
              </div>
              <div className={classes.modal__description}>
                {selectedExperience.descriptions.map((description, index) => (
                  <p key={index}>{description}</p>
                ))}
              </div>
            </Modal>
          )}
        </div>
      </div>
    </div>
  );
};

export default Experience;
