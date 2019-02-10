import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom'

const ProjectList = ({projects}) => {
    const newProjects = projects && projects.map(project => {
        return (
                <Link key={project.id}  to={'/project/' + project.id}>
                    <ProjectSummary project = {project} /> 
                </Link>
            )
        }
    )
    return (
        <div className="project-list section">
            {newProjects}
        </div>
    )
}

export default ProjectList