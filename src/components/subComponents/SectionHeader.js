import React from 'react'

export default ({ title, description }) => {
  return (
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">{title}</h2>
        {
          description !== "" ? <h3 className="section-subheading text">{description}</h3> : null
        }
      </div>
    </div>
  )
}