import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import texttoolkit from "../../Assets/Projects/texttoolkit.png";
import blog from "../../Assets/Projects/blog.png";
import newsapp from "../../Assets/Projects/newsapp.png";
import amazon from "../../Assets/Projects/amazon.png";
import todo from "../../Assets/Projects/todo.png";
import currency from "../../Assets/Projects/currency.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={texttoolkit}
              isBlog={false}
              title="TextToolkit"
              description="Developed a application using React.js which allows users to convert text to lowercase, uppercase, count words, calculate reading time, read thetext aloud, copy the text, and remove extra spaces also provided the feature of light mode and dark mode."
              ghLink="https://github.com/ShivaniBhange09/TextToolkit"
              demoLink="https://shivanibhange09.github.io/TextToolkit/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Blog Application"
              description="I developed a full-stack Blog Application using the MERN stack (MongoDB, Express.js, React, Node.js). The app enables users to create, read, update, and delete blog posts, offering a seamless experience for managing content. "
              ghLink="https://github.com/ShivaniBhange09/mern-blog"
              demoLink="https://classy-unicorn-31ccc7.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsapp}
              isBlog={false}
              title="News Application"
              description="I created a News App using HTML, CSS, and JavaScript, integrating the News API to deliver daily news updates to users. The app features a search function, allowing users to quickly find news on specific topics."
              ghLink="https://github.com/ShivaniBhange09/newsapp-API"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazon}
              isBlog={false}
              title="Amazon Clone"
              description="I developed an Amazon Clone using HTML, CSS, and JavaScript. The project replicates the core features of an e-commerce platform, including product listings, a shopping cart, and a responsive user interface."
              ghLink="https://github.com/ShivaniBhange09/Amazon-Clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TODO LIST"
              description="Created a responsive TODO List application using HTML, CSS, and JavaScript. The app allows users to add, edit, and delete tasks efficiently. It features an intuitive interface with dynamic task management, enabling users to mark tasks as completed and maintain an organized list of activities."
              ghLink="https://github.com/ShivaniBhange09/TODO-LIST-using-html-css-js"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              isBlog={false}
              title="Currency Converter"
              description="I built a Currency Converter application using the MERN stack (MongoDB, Express.js, React, Node.js). The app allows users to convert between different currencies in real time, fetching the latest exchange rates via an API. It features a clean, responsive interface and provides accurate conversion results based on the user's input."
              ghLink="https://github.com/ShivaniBhange09/Currency-converter"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
