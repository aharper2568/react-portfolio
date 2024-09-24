const Project = ({ title, image, githubLink, liveLink }) => {
  return (
    <div className="project container border mb-2 w-50">
      <h3>{title}</h3>
      <img src={image} className="w-100" alt={`${title} Screenshot`} />
      <p>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {" | "}
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </p>
    </div>
  );
};

export default Project;