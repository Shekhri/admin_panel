import React from "react";
import styles from './style.module.css'
import Projects from '../../components/projects'
import Sidebar from "../../Layout";

function ProjectsPage() {
   return(
      <Sidebar>
         <Projects /> 
      </Sidebar>
   )
}

export default ProjectsPage