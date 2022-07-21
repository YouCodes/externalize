import React from 'react'

const ProjectCard = ({ project }) => {
  return (
    <div className='col-md-6'>
      <div className='card mb-3'>
        <div className='card-body py-10 inline-block'>
          <div className='d-flex justify-content-between align-items-center inline-block'>
            <h5 className='card-title'>{project.name}</h5>

            <a className='btn btn-light' href={`/projects/${project.id}`}>
              View
            </a>
            
          </div>
          <p className='small inline-block mb-3'>
            Status: <strong>{project.status}</strong>
          </p>
            <img style={{ width:'48px', height: '48px', position: 'relative' }}
              src={project.status==="Completed" ? "images/Rectangle.png" : "images/Rectangle2.png" }
              alt=""
              className="items-center justify-center"
            />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard