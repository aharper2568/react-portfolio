const Project = ({ title, image, githubLink, liveLink }) => {
  return (
    <div className="project border mb-2 w-50 col-md-4 d-flex flex-column">
      <h3>{title}</h3>
      <img src={image} className="w-100" alt={`${title} Screenshot`} />
      <div className="mt-auto">
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
    </div>
  );
};

export default Project;