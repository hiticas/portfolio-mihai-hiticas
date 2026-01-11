import Project from "../../components/Project/Project"
import Button from "../../ui-components/Button/Button"
import Typography from "../../ui-components/Typography/Typography"

import projectImage1 from "../../assets/images/project1.jpg"
import projectImage2 from "../../assets/images/project2.jpg"
import projectImage3 from "../../assets/images/thumbnail-project-3-small.webp"
import projectImage4 from "../../assets/images/thumbnail-project-4-small.webp"
import projectImage5 from "../../assets/images/thumbnail-project-5-small.webp"
import projectImage6 from "../../assets/images/thumbnail-project-6-small.webp"

import './Projects.scss'

function Projects() {
  return (
    <div className="projects-section">
      <div className="header-projects-section">
        <Typography as="h1" type="heading-xl">Projects</Typography>
        <a href="mailto:hiticasmihai7@gmail.com">
          <Button aria-label="Contact">
            <Typography as="span" type="body-btn">Contact me</Typography>
          </Button>
        </a>
      </div>
      <div className="projects">
        <div className="projects-row">
          <Project
            image={projectImage1}
            title="MEET LANDING PAGE"
            languages={["REACT", "Vite", "SCSS"]}
            links={[
              { label: "View Project", url: "https://meet-landing-page-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Meet-landing-page-Vite" }
            ]}
          />
          <Project
            image={projectImage2}
            title="RECIPE PAGE"
            languages={["REACT", "Vite", "SCSS"]}
            links={[
              { label: "View Project", url: "https://recipe-page-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Recipe-page-Vite" }
            ]}
          />
        </div>
        <div className="projects-row">
          <Project
            image={projectImage3}
            title="TODO WEB APP"
            languages={["HTML", "CSS", "JAVASCRIPT"]}
            links={[
              { label: "View Project", url: "https://github.com/example/project3" },
              { label: "View Code", url: "https://github.com/example/project3-code" }
            ]}
          />
          <Project
            image={projectImage4}
            title="ENTERTAINMENT WEB APP"
            languages={["HTML", "CSS", "JAVASCRIPT"]}
            links={[
              { label: "View Project", url: "https://github.com/example/project4" },
              { label: "View Code", url: "https://github.com/example/project4-code" }
            ]}
          />
        </div>
        <div className="projects-row">
          <Project
            image={projectImage5}
            title="MEMORY GAME"
            languages={["HTML", "CSS", "JAVASCRIPT"]}
            links={[
              { label: "View Project", url: "https://github.com/example/project5" },
              { label: "View Code", url: "https://github.com/example/project5-code" }
            ]}
          />
          <Project
            image={projectImage6}
            title="ART GALLERY SHOWCASE"
            languages={["HTML", "CSS", "JAVASCRIPT"]}
            links={[
              { label: "View Project", url: "https://github.com/example/project6" },
              { label: "View Code", url: "https://github.com/example/project6-code" }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects