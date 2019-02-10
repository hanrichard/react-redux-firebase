import React from 'react';

const ProjectSummary = ({project}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{project.title} titile</span>
                <p>{project.content}</p>
            </div>
        </div>
    )
}

export default ProjectSummary