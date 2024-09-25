export default function Resume() {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <section id="resume-card" className="container border">
        <h3>Proficiencies</h3>
        <ul className="list-group">
          <li className="list-group-item list-group-item-success">
            JavaScript
          </li>
          <li className="list-group-item list-group-item-primary">
            PostgreSQL
          </li>
          <li className="list-group-item list-group-item list-group-item-success">
          React
          </li>
          <li className="list-group-item list-group-item-primary">
          MongoDB
          </li>
        </ul>
      </section>
      <a href="#" className="link-offset-2 link-underline link-underline-opacity-0" download>Download Resume Here</a>
    </section>
  )
}