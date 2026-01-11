import Project from "../../components/Project/Project"
import Button from "../../ui-components/Button/Button"
import Typography from "../../ui-components/Typography/Typography"

import projectImage1 from "../../assets/images/project1.jpg"
import projectImage2 from "../../assets/images/project2.jpg"
import projectImage3 from "../../assets/images/project3.jpg"
import projectImage4 from "../../assets/images/project4.jpg"
import projectImage5 from "../../assets/images/project5.jpg"
import projectImage6 from "../../assets/images/project6.jpg"

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
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://meet-landing-page-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Meet-landing-page-Vite" }
            ]}
          />
          <Project
            image={projectImage2}
            title="RECIPE PAGE"
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://recipe-page-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Recipe-page-Vite" }
            ]}
          />
        </div>
        <div className="projects-row">
          <Project
            image={projectImage3}
            title="FOUR CARD FEATURE"
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://four-card-feature-section-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Four-card-feature-section-Vite" }
            ]}
          />
          <Project
            image={projectImage4}
            title="TESTIMONIALS GRID"
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://testimonials-grid-section-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Testimonials-grid-section-Vite" }
            ]}
          />
        </div>
        <div className="projects-row">
          <Project
            image={projectImage5}
            title="ARTICLE PREVIEW"
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://article-preview-component-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Article-preview-component-Vite" }
            ]}
          />
          <Project
            image={projectImage6}
            title="PRODUCT PREVIEW"
            languages={["REACT", "VITE", "SCSS"]}
            links={[
              { label: "View Project", url: "https://product-preview-card-component-vite.netlify.app" },
              { label: "View Code", url: "https://github.com/hiticas/Product-preview-card-component-Vite" }
            ]}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects