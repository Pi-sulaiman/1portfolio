import Project from "./Project";
import SectionTitle from "./SectionTitle";
const data = [
  {
    id: 1,
    title: "Tech Alpha - About a modern e-commerce website",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675924858/personal-portfolio/tech-alpha-1_rfrwxq.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675924857/personal-portfolio/tech-alpha-2_b36mvb.png",
    description:
      "A modern e-commerce website built with React, Redux, TailwindCSS, Redux Thunk, and Redux Toolkit. Features product listing, filtering, checkout and seamless shopping experience. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "react",
      "redux",
      "redux-thunk",
      "tailwindcss",
      "redux-toolkit",
      "GSAP",
    ],
    liveLink: "https://tech-alpha-a3.netlify.app/",
    frontEndLink: "https://github.com/Shm-Rsuf/tech-alpha-a3",
    backEndLink: "https://www.google.com/",
  },
  {
    id: 2,
    title: "Foodverse - A modern food delivery online e-commerce website",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675923002/personal-portfolio/food-verse-1_si6no3.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675923756/personal-portfolio/food-verse-2_awuupw.png",
    description:
      "A modern online food delivery e-commerce website built with React, Redux, TailwindCSS, Redux Thunk, and Redux Toolkit. Features product listing, filtering, checkout and seamless shopping experience. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: [
      "html",
      "react",
      "redux",
      "redux-thunk",
      "tailwindcss",
      "redux-toolkit",
      "GSAP",
    ],
    liveLink: "https://foodverse-a3.netlify.app/",
    frontEndLink: "https://github.com/Shm-Rsuf/foodverse",
  },
  {
    id: 3,
    title: "Tera-Guard - Your security meets our priority",
    img1: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675924855/personal-portfolio/tera-one_wzqjb8.png",
    img2: "https://res.cloudinary.com/dlc8v0etj/image/upload/v1675924855/personal-portfolio/tera-two_qkjisk.png",
    description:
      "A modern online food delivery e-commerce website built with React, Redux, TailwindCSS, Redux Thunk, and Redux Toolkit. Features product listing, filtering, checkout and seamless shopping experience. Async actions handled by Redux Thunk and state management made easy with Redux Toolkit.",
    tools: ["HTML", "CSS", "Bootstrap", "JavaScript", "react", "GSAP"],
    liveLink: "https://tera-guard-app.netlify.app/",
    frontEndLink: "https://github.com/Shm-Rsuf/tera-gurad-project",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40" id="projects">
      <SectionTitle title={"My Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
