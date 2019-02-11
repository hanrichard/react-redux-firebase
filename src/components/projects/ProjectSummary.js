import React from 'react';
import moment from 'moment';

const ProjectSummary = ({project}) => {
    return (
        <div className="card">
            <div className="card-content">
                <span className="card-title">{project.title} titile</span>
                <p>{project.content}</p>
                <p>posted by {project.authorFirstname}, {project.authorLastname}</p>
                <p>posted time: {moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

export default ProjectSummary