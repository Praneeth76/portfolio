import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Chat App",
    year: "Dec 2024",
    align: "right",
    image: "/images/chat-app.png",
    link: "https://github.com/Praneeth76/chat-app.git",
  },
  {
    name: "Sports Scheduler",
    year: "Sept 2024",
    align: "left",
    image: "/images/sports.webp",
    link: "https://github.com/Praneeth76/sports-scheduler-501.git",
  },
  {
    name: "Rock-Paper-Scissors",
    year: "Jan 2024",
    align: "right",
    image: "/images/rock-paper-scissors.png",
    link: "https://github.com/Praneeth76/praneeth-rps-game.git",
  },
  {
    name: "Currency Convertor",
    year: "Nov 2023",
    align: "left",
    image: "/images/currency.png",
    link: "https://github.com/Praneeth76/currency-convertor.git",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              link={project.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
