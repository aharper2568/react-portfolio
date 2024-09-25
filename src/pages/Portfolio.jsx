import Project from "../components/Projects";
import ECBS from "../assets/ECBS.png"
import PRT from "../assets/PRT.png"
import NTS from "../assets/NTS.png"
import RMG from "../assets/RMG.png"
import WBP from "../assets/WBP.png"
import STP from "../assets/STP.png"

export default function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Back-End Server",
      image: ECBS,
      githubLink: "https://github.com/aharper2568/E-Commerce-Back-End-Server",
      liveLink: "https://github.com/aharper2568/E-Commerce-Back-End-Server",
    },
    {
      title: "Employee Payroll Tracker",
      image: PRT,
      githubLink: "https://github.com/aharper2568/payroll-tracker",
      liveLink: "https://aharper2568.github.io/payroll-tracker/",
    },
    {
      title: "Note Taking App on a Server",
      image: NTS,
      githubLink: "https://github.com/aharper2568/note-taker-server",
      liveLink: "https://note-taker-server-9tay.onrender.com/",
    },
    {
      title: "Node Based README Generator",
      image: RMG,
      githubLink: "https://github.com/aharper2568/readme-generator",
      liveLink: "https://github.com/aharper2568/readme-generator",
    },
    {
      title: "Online Pokedex",
      image: WBP,
      githubLink: "https://github.com/aharper2568/web-pokedex",
      liveLink: "https://aharper2568.github.io/web-pokedex/",
    },
    {
      title: "Online Task-Board w/ local storage saving",
      image: STP,
      githubLink: "https://github.com/aharper2568/simple-taskboard",
      liveLink: "https://aharper2568.github.io/web-pokedex/",
    },
  ];
  return (
    <div className="container">
      <h2>My Projects</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
};
