import React from 'react'

import SectionHeader from './subComponents/SectionHeader';

export default () => {
  return (
    <section className="page-section" id="services">
      <div className="container">
        <SectionHeader title="test" description="description"/>
        <div className="row text-center">

          <div className="col-md-4">
            <span className="fa-stack fa-4x">
              <i className="fa fa-circle fa-stack-2x text-primary">
              </i>
              <i className="fa fa-shopping-cart fa-stack-1x fa-inverse">
              </i>
            </span>
            <h4 className="service-heading">E-Commerce</h4>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>

        </div>
      </div>
    </section>
  )
}